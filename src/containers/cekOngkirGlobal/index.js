//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {styles} from '../../styles/_global';
import Header from '../../components/hedear';
import {dataKurir} from '../../config/kurir';
import {primer} from '../../styles/_color';

// create a component
const Tracking = ({navigation}) => {
  const [Kota, setProvinsi] = useState ('');
  const [ProvinsiID, setProvinsiID] = useState ();
  const [NegaraTujuan, setNegaraTujuan] = useState ('');
  const [NegaraIDTujuan, setNegaraIDTujuan] = useState ();
  const [allProvinsi, setAllProvinsi] = useState ([]);
  const [allNegara, setAllNegara] = useState ([]);
  const [modalProvinsi, setModalProvinsi] = useState (false);
  const [modalNegaraTujuan, setModalNegaraTujuan] = useState (false);
  const [berat, setBerat] = useState ();
  const [kurir, setKurir] = useState ('');
  const [kurirValue, setKurirValue] = useState ('');
  const [ModalKurir, setModalKurir] = useState (false);
  const [results, setResults] = useState ([]);

  useEffect (() => {
    getProvinsi ();
    getNegara ();
  }, []);

  const onPress = () => {
    navigation.goBack ();
    console.log ('Res');
  };

  const getProvinsi = () => {
    fetch ('https://api.rajaongkir.sipondok.com/v1/kota')
      .then (result => result.json ())
      .then (result => {
        setAllProvinsi (result);
        setProvinsi (result[0].province);
        setProvinsiID (result[0].province_id);
        console.log (result);
      })
      .catch (error => console.log (error));
  };

  const getNegara = () => {
    fetch ('https://api.rajaongkir.sipondok.com/v1/intern/ke/semua')
      .then (result => result.json ())
      .then (result => {
        setAllNegara (result);
        setNegaraTujuan (result[0].country_name);
        setNegaraIDTujuan (result[0].country_id);
        console.log (result);
      })
      .catch (error => console.log (error));
  };

  const renderListProvinsi = () => {
    return allProvinsi.map ((value, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setProvinsi (value.province);
            setProvinsiID (value.province_id);
            setModalProvinsi (false);
          }}
        >
          <Text style={styles.namaKota}>{value.province}</Text>
        </TouchableOpacity>
      );
    });
  };

  const renderListNegaraTujuan = () => {
    return allNegara.map ((value, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setNegaraTujuan (value.country_name);
            setNegaraIDTujuan (value.country_id);
            setModalNegaraTujuan (false);
          }}
        >
          <Text style={styles.namaKota}>{value.country_name}</Text>
        </TouchableOpacity>
      );
    });
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

  const searchRates = () => {
    console.log (ProvinsiID, NegaraIDTujuan, berat, kurirValue);
    if (ProvinsiID && NegaraIDTujuan && berat && kurirValue) {
      navigation.navigate ('ResultsGlobal', {
        ProvinsiID: ProvinsiID,
        NegaraIDTujuan: NegaraIDTujuan,
        berat: berat,
        kurirValue: kurirValue,
      });
    } else {
      Alert.alert ('Results', 'Harap Mengisi Semua Data');
    }
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalProvinsi}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Pilih Kota Anda
            </Text>
            <TouchableHighlight
              style={styles.cancel}
              onPress={() => {
                setModalProvinsi (!modalProvinsi);
              }}
            >
              <Text style={styles.titleCancel}>X</Text>
            </TouchableHighlight>
            <ScrollView>
              <View style={styles.listKota}>
                {renderListProvinsi ()}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalNegaraTujuan}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Pilih Kota Tujuan Anda
            </Text>
            <TouchableHighlight
              style={styles.cancel}
              onPress={() => {
                setModalNegaraTujuan (!modalNegaraTujuan);
              }}
            >
              <Text style={styles.titleCancel}>X</Text>
            </TouchableHighlight>
            <ScrollView>
              <View style={styles.listKota}>
                {renderListNegaraTujuan ()}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

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

      <Header onPress={onPress} title="Rates Internasional" />
      <ScrollView style={styles.boxContainer}>
        <View style={styles.boxInput}>
          <View style={styles.boxList}>
            <View style={styles.boxOrigin}>
              <Text style={styles.title}>Origin</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  if (allProvinsi.length === 0) {
                    getProvinsi ();
                  }
                  setModalProvinsi (true);
                }}
                style={styles.boxItem}
              >
                <Text style={styles.listOrigin}>
                  {' '}
                  {Kota.length === 0 ? 'Pilih Provinsi' : Kota}
                  {' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxList}>
            <View style={styles.boxOrigin}>
              <Text style={styles.title}>Destination</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => setModalNegaraTujuan (true)}
                style={styles.boxItem}
              >
                <Text style={styles.listOrigin}>
                  {' '}
                  {NegaraTujuan.length === 0 ? 'Pilih Negera' : NegaraTujuan}
                  {' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.boxList}>
            <Text style={styles.title}>Berat(g)</Text>
            <TextInput
              placeholder="Masukan Berat Paket"
              onChangeText={value => setBerat (value)}
              style={styles.input}
            />
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
      </ScrollView>
      <View style={{alignItems: 'center', marginBottom : 20}}>
        <TouchableOpacity
          style={styles.btnSearch}
          onPress={() => searchRates ()}
        >
          <Text style={styles.textTitle}>Search Rates</Text>
        </TouchableOpacity>
        {results.length == 0
          ? null
          : <View style={styles.result}>
              <Text style={styles.titleResult}>{results.name}</Text>
              <Text style={styles.valueResult}>Rp. 1600</Text>
            </View>}
      </View>
    </View>
  );
};

//make this component available to the app
export default Tracking;
