import {AsyncStorage} from 'react-native';

export const updatelocation = async locatoions => {
  try {
    var latitude = JSON.stringify(locatoions[0].coords.latitude);
    console.log(latitude);
    var longitude = JSON.stringify(locatoions[0].coords.longitude);
    console.log(longitude);
    const Token = await AsyncStorage.getItem('ACCESS_TOKEN');
    if(Token 1=null)
    {

    try {
      fetch("https://ism3na.com/cmp/public/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
        api_token:Token
          id_number: latitude,
          password: longitude
        })
      })
        .then(response => response.json())
        .then(JsonResult => {
          //alert();
          if (JSON.parse(JsonResult.status) == 201) {
            alert(" API went Good !");
           
          } else {
            alert("خطأ في ارسال موقعك ");
          }
        });
    } catch (error) {
      this.setState({ error: error });
      console.log("error " + error);
      //this.setState({showProgress: false});
    }
    }
  } catch {}
  
};
