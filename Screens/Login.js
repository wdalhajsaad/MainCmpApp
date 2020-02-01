import React from 'react'
import {
StyleSheet,
Text,
View,
ImageBackground,
Image,
TouchableOpacity,
TextInput,
Button,
AsyncStorage
} from 'react-native';
import Styles from '../Styles/Styles';
import Spinner from '../components/Spinner'

export default class Login extends React.Component {
    constructor(props) {
    super(props);

    this.state={
         UserID: '',
         Loading:false,
         Password:'',
         error:''
    }
    }
    renderButton() {

        if (this.state.Loading) {
            return (
                <Spinner SizeSpinner='large' />
            );
        }

        return (

            <TouchableOpacity style={Styles.ButtonStyle}
                onPress={this.LoginClick.bind(this)} >
                <Text style={Styles.ButtonText} > دخـــــول </Text>
            </TouchableOpacity>
        );
    }
async  LoginClick(){
    //alert(this.state.Password);
    try{
       fetch('https://ism3na.com/cmp/public/api/login', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                               id_number: this.state.UserID,
                               password:this.state.Password
                              })
                            }).then(response => response.json())
              .then((JsonResult) => {
        //alert();
               if(JSON.parse(JsonResult.status)==200)
               {
                          alert('goood day');
                          //alert(JSON.parse(JsonResult.user))
                          var accesstoken = JSON.stringify(JsonResult.user.api_token);
                         this.storeToken(accesstoken);
               }
               else{
                   alert('خطأ في اسم المستخدم او كلمة والمرور');
               }
              })
    
    
     } 
     catch(error) {
        this.setState({error: error});
        console.log("error " + error);
        //this.setState({showProgress: false});
    }
    
   // alert("call api ")
}
storeToken(responseData){
    AsyncStorage.setItem('ACCESS_TOKEN', responseData, (err)=> {
      if(err){
       alert('خطأ في تخزين التوكن');
       
      }
      else{
           console.log("success");
           this.props.navigation.navigate('Massages');
      }
     
    }).catch((err)=> {
        console.log("error is: " + err);
    });
  }
    render(){
return (
<View style={Styles.Logincontainer}>

              
            
<View> 
 <Text>Logo Here</Text>
<TextInput style={Styles.TextBoxStyle}
    autoCapitalize="none"
    autoCorrect={false}
    returnKeyType="number"
    placeholder=' رقم الهوية'
    underlineColorAndroid='rgba(0,0,0,0)'
    placeholderTextColor='#808080'
    textAlign='right'
    onChangeText={UserID => this.setState({ UserID })} />

    <TextInput style={Styles.TextBoxStyle}
    autoCapitalize="none"
   secureTextEntry={true}
    autoCorrect={false}
    returnKeyType="next"
    placeholder=' كلمة المرور'
    underlineColorAndroid='rgba(0,0,0,0)'
    placeholderTextColor='#808080'
    textAlign='right'
    onChangeText={Password => this.setState({ Password })} />

    {this.renderButton()}

</View>
</View>
)
}
}