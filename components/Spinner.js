import React from 'react';  
import {View,ActivityIndicator} from 'react-native';

const Spinner=({SizeSpinner})=>{

    return (
        <View style={Styles.spinnerStyle}>
            <ActivityIndicator size={SizeSpinner || 'large'} />
        </View>
    );
};

const Styles={

    spinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
};

export default Spinner;