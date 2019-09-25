import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wording from './component/Wording';
import Cupcake from './component/cupcake';
import spaceImage from './component/spaceImg';


export default class App extends React.Component {
  render(){
    const cupcakes = [
    {
      "candle": "white",
      "flame": "orange",
      "frosting": "blue",
      "base": "yellow",
      "wrapper": "pink",
    },

    {
      "candle": "yellow",
      "flame": "blue",
      "frosting": "red",
      "base": "white",
      "wrapper": "purple",
    },

    {
      "candle": "pink",
      "flame": "red",
      "frosting": "yellow",
      "base": "blue",
      "wrapper": "green",
    }
  ]

   return (
     <View style={styles.container}>
       <Text style={styles.title}>Birthday App</Text>
       <Wording></Wording>
       <spaceImage></spaceImage>
       {
         cupcakes.map((cupcake, index) =>
          <Cupcake style={styles.cupCakeStyle}
          wrapper={cupcake.wrapper}
          flame={cupcake.flame}
          candle={cupcake.candle}
          frosting={cupcake.frosting}
          base={cupcake.base}></Cupcake>
         )
       }
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    ImageBackground: 'assets/space.jpg',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 40
  },
  cupCakeStyle:{
    flex:1

  }
});
