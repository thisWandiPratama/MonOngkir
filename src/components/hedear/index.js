//import liraries
import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {arrowLeft} from '../../assets';
import {styles} from '../../styles/_header';
// create a component
const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} >
        <Image source={{uri: arrowLeft}} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

//make this component available to the app
export default Header;
