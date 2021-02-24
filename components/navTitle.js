import { Ionicons } from '@expo/vector-icons';
import {Text,View,StyleSheet } from 'react-native';
import * as React from 'react';

export default function navTitle(props) {
  return (
    // //   <View style={{flex:1}}>
    // // {/* <Ionicons
    // //   name={props.name}
    // //   style={{ marginBottom: -3 }}
    // // /> */}
    // // <Text>{props.text}</Text>
    // // </View>
    // <View  style={styles.container}><Text>{props.text}
    // <Ionicons name={props.name}></Ionicons>
    // </Text>
    // </View>
    <Ionicons size={30} name={props.name} style={styles.img}></Ionicons>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 0.3,
      backgroundColor: 'white',
    },
    img : { 
         
    }
  });