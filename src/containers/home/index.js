//import liraries
import React, {Component} from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {styles} from '../../styles/_home';
import {primer} from '../../styles/_color';
import {truck, tracking, rates} from '../../assets';

// create a component
const Home = () => {
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
          <View style={styles.boxMenu}>
            <View style={styles.list}>
              <Image source={{uri: tracking}} style={styles.icon} />
              <Text style={styles.rateTitle}>Tracking</Text>
            </View>
          </View>
          <View style={styles.boxMenu}>
            <View style={styles.list}>
              <Image source={{uri: rates}} style={styles.icon} />
              <Text style={styles.rateTitle}>Rates Local</Text>
            </View>
          </View>
          <View style={styles.boxMenu}>
            <View style={styles.list}>
              <Image source={{uri: rates}} style={styles.icon} />
              <Text style={styles.rateTitle}>Rates Internasonal</Text>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default Home;
