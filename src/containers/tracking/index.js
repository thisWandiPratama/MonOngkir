//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableHighlight,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../styles/_tracking';
import Header from '../../components/hedear';
import {dataKurir} from '../../config/kurir';

// create a component
const Tracking = ({navigation}) => {
  const [kurir, setKurir] = useState ('');
  const [kurirValue, setKurirValue] = useState ('');
  const [ModalKurir, setModalKurir] = useState (false);

  const onPress = () => {
    navigation.goBack ();
    console.log ('Res');
  };

  const renderListKurir = () => {
    return dataKurir.map ((value, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setKurir (value.title);
            setKurirValue (value.value);
            setModalKurir (false);
          }}
        >
          <Text style={styles.namaKota}>{value.title}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={ModalKurir}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Pilih Kurir
            </Text>
            <TouchableHighlight
              style={styles.cancel}
              onPress={() => {
                setModalKurir (!ModalKurir);
              }}
            >
              <Text style={styles.titleCancel}>X</Text>
            </TouchableHighlight>
            <ScrollView>
              <View style={styles.listKota}>
                {renderListKurir ()}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Header onPress={onPress} title="Tracking Your Paket" />
      <View style={styles.boxContainer}>
        <View style={styles.boxInput}>
          <View style={styles.boxList}>
            <Text style={styles.title}>No. Resi</Text>
            <TextInput placeholder="Masukan No.Resi" style={styles.input} />
          </View>
        </View>
        <View style={styles.boxList}>
          <View style={styles.boxOrigin}>
            <Text style={styles.title}>Kurir</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => setModalKurir (true)}
              style={[styles.boxItem, {width: '100%'}]}
            >
              <Text style={styles.listOrigin}>
                {' '}
                {kurir.length === 0 ? 'Pilih Kurir' : kurir}
                {' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', marginBottom: 20}}>
        <TouchableOpacity
          style={styles.btnSearch}
          onPress={() => searchRates ()}
        >
          <Text style={styles.textTitle}>Search Rates</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

//make this component available to the app
export default Tracking;
