import React from 'react'
import {
StyleSheet,
Text,
View,
ScrollView,
ImageBackground,
Image,
TouchableOpacity,
TextInput,
 FlatList,
} from 'react-native';
import Styles from '../Styles/Styles';

export default class Massages extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      loading: false,
      NewsList: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
       dataSource: [
   {
    "id": 0,
    "src": "http://placehold.it/200x200?text=1",
  },
   {
    "id": 1,
    "src": "http://placehold.it/200x200?text=2",
  },
   {
    "id": 2,
    "src": "http://placehold.it/200x200?text=3",
  },
   {
    "id": 2,
    "src": "http://placehold.it/200x200?text=3",
  }
       ],
     // Uid:this.props.navigation.state.params.Uid,
    
  }
   }

   componentDidMount() {

   
  }
  
  render(){
return (
 <View style={Styles.GridStyle}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
              <Image style={Styles.imageThumbnail} source={{ uri: item.src }} />
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
)
}
}