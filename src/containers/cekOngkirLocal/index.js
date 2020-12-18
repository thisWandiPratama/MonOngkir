//import liraries
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from '../../styles/_local';
import Header from '../../components/hedear';
import {TouchableOpacity} from 'react-native-gesture-handler';

// create a component
const Tracking = ({navigation}) => {
  const [kategori, setKategori] = useState ('kota');

  const onPress = () => {
    navigation.goBack ();
    console.log ('Res');
  };

  return (
    <View style={styles.container}>
      <Header onPress={onPress} title="Rates Local" />
      <View style={styles.boxContainer}>
        <View style={styles.boxInput}>
          <View style={styles.boxList}>
            <View style={styles.boxOrigin}>
              <Text style={styles.title}>Origin</Text>
              <View style={styles.kategori}>
                <TouchableOpacity style={[styles.kota,{backgroundColor: kategori==='kota' ? '#17941d' : '#dfe0df'}]}>
                  <Text style={[styles.titleBtn,{color: kategori==='kota' ? '#fff' : '#dfe0df'}]}>Kota</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.kecamatan, {backgroundColor: kategori==='kecamatan' ? '#17941d' : '#dfe0df'}]}>
                  <Text style={styles.titleBtn}>Kecamatan</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.listOrigin}> Kota </Text>
          </View>
          <View style={styles.boxList}>
            <Text style={styles.title}>Destination</Text>
            <TextInput placeholder="Masukan No.Resi" style={styles.input} />
          </View>
          <View style={styles.boxList}>
            <Text style={styles.title}>Berat(g)</Text>
            <TextInput placeholder="Masukan No.Resi" style={styles.input} />
          </View>
          <View style={styles.boxList}>
            <Text style={styles.title}>Kuris</Text>
            <TextInput placeholder="Masukan No.Resi" style={styles.input} />
          </View>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default Tracking;
