//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/_home';
import {primer} from '../../styles/_color';
import {truck, tracking, rates} from '../../assets';

// create a component
const Home = ({navigation}) => {
    const [kurs, setKurs] = useState('')

    useEffect(() => {
        getKurs()
    },[])

    const getKurs = () => {
        fetch('https://api.rajaongkir.sipondok.com/v1/kurs')
        .then(result => result.json())
        .then(result => setKurs(result.value))
        
    }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={primer} />
      <View style={styles.header}>
        <View style={styles.iconHeader}>
          <Image source={{uri: truck}} style={styles.icon} />
        </View>
        <View style={styles.rowHeader}>
          <View style={styles.boxTitle}>
            <Text style={styles.title}>
              Mon<Text style={styles.ongkir}>Ongkir</Text>
            </Text>
            <Text style={styles.subTitle}>Monitoring Ongkir Dengan Akurat</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.conContent}>
          <TouchableOpacity onPress={() => navigation.navigate('Tracking')} style={styles.boxMenu}>
            <View style={styles.list}>
              <Image source={{uri: tracking}} style={styles.icon} />
              <Text style={styles.rateTitle}>Tracking</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Local')} style={styles.boxMenu}>
            <View style={styles.list}>
              <Image source={{uri: rates}} style={styles.icon} />
              <Text style={styles.rateTitle}>Rates Local</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Global')}  style={styles.boxMenu}>
            <View style={styles.list}>
              <Image source={{uri: rates}} style={styles.icon} />
              <Text style={styles.rateTitle}>Rates Internasonal</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.conKurs}>
          <View style={styles.titleKurs}>
            <Text style={styles.kurs}>Kurs Rupiah - USD(US Dolar)</Text>
          </View>
          <View style={styles.valueKurs}>
            <Text style={styles.kurs}>$ {kurs}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default Home;
