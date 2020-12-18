//import liraries
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../../styles/_tracking';
import Header from '../../components/hedear';

// create a component
const Tracking = ({navigation}) => {
  const [kuris, setKurir] = useState('')

  const onPress = () => {
    navigation.goBack ();
    console.log ('Res');
  };
  
  return (
    <View style={styles.container}>
      <Header onPress={onPress} title="Tracking Your Paket" />
      <View style={styles.boxContainer}>
        <View style={styles.boxInput}>
          <View style={styles.boxList}>
            <Text style={styles.title}>No. Resi</Text>
            <TextInput placeholder="Masukan No.Resi" style={styles.input} />
          </View>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default Tracking;
