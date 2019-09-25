import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Wording extends React.Component {
  render(){
   return (
     <View>
       <Text style={styles.para}>Happy Birthday!!</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
    para: {
      backgroundColor: '#000',
      color: 'red',
      fontSize: 24
    }

  });