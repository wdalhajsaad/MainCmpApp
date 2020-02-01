import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    Maincontainer: {
      flex: 1,
      padding: 150,
      justifyContent: 'center',
      alignItems: 'center',
    //  backgroundColor:'red'
    },
    BaseText:{
       // fontFamily:'Cochin',
        fontSize:20,
        
    },
    TextTite:{
     fontWeight:'bold'
    },
    Logincontainer:{
      flex:1,
      backgroundColor:'#455a64',
      justifyContent: 'center',
      alignItems: 'center',
    },
    /*
    TextColor:{
      color
    },*/
     TextBoxStyle: {
        height: 50,
        width: 300,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(225,225,225,0.7)',
        marginBottom: 20,
        padding: 6,
        color: '#000',
        borderRadius: 20

    },
     ButtonStyle: {
        backgroundColor: '#00c3a0',
        paddingVertical: 15,
        borderRadius: 20,
        width: 300
    },
     ButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
     GridStyle: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
   imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },


})