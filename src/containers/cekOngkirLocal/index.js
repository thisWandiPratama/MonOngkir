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
} from 'react-native';
import {styles} from '../../styles/_local';
import Header from '../../components/hedear';

// create a component
const Tracking = ({navigation}) => {
  const [Kota, setKota] = useState ('');
  const [kotaID, setkotaID] = useState ();
  const [kecamatan, setKecamatan] = useState ([]);
  const [kecamatanID, setKecamatanID] = useState ([]);
  const [allKota, setAllKota] = useState ([]);
  const [allKecamatan, setAllKecamatan] = useState ([]);
  const [modalKota, setModalKota] = useState (false);
  const [modalKecamatan, setModalKecamatan] = useState (false);

  useEffect (() => {
    getKota ();
    setTimeout (() => {
      if (allKota.length > 0) {
        getKecamatan ();
      }
    }, 2000);
  }, []);

  const onPress = () => {
    navigation.goBack ();
    console.log ('Res');
  };

  const getKota = () => {
    fetch ('https://api.rajaongkir.sipondok.com/v1/kota')
      .then (result => result.json ())
      .then (result => {
        setAllKota (result);
        setKota (result[0].city_name);
        setkotaID (result[0].city_id);
        console.log (result);
      })
      .catch (error => console.log (error));
  };

  const renderListKota = () => {
    return allKota.map ((value, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setKota (value.city_name);
            setkotaID (value.city_id);
            setModalKota (false);
          }}
        >
          <Text style={styles.namaKota}>{value.city_name}</Text>
        </TouchableOpacity>
      );
    });
  };

  const getKecamatan = () => {
    fetch (`https://api.rajaongkir.sipondok.com/v1/kecamatan/kota/${kotaID}`)
      .then (result => result.json ())
      .then (result => {
        setAllKecamatan (result);
        setKecamatan (result[0].subdistrict_name);
        setKecamatanID (result[0].subdistrict_id);
        console.log (result);
      })
      .catch (error => console.log (error));
  };

  const renderListKecamatan = () => {
    return allKecamatan.map ((value, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setKecamatan (value.subdistrict_name);
            setKecamatanID (value.subdistrict_id);
            setModalKecamatan (false);
          }}
        >
          <Text style={styles.namaKota}>{value.subdistrict_name}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalKota}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Pilih Kota Anda
            </Text>
            <TouchableHighlight
              style={styles.cancel}
              onPress={() => {
                setModalKota (!modalKota);
              }}
            >
              <Text style={styles.titleCancel}>X</Text>
            </TouchableHighlight>
            <ScrollView>
              <View style={styles.listKota}>
                {renderListKota ()}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={modalKecamatan}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Pilih Kecamatan Anda
            </Text>
            <TouchableHighlight
              style={styles.cancel}
              onPress={() => {
                setModalKecamatan (!modalKecamatan);
              }}
            >
              <Text style={styles.titleCancel}>X</Text>
            </TouchableHighlight>
            <ScrollView>
              <View style={styles.listKota}>
                {renderListKecamatan ()}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Header onPress={onPress} title="Rates Local" />
      <View style={styles.boxContainer}>
        <View style={styles.boxInput}>
          <View style={styles.boxList}>
            <View style={styles.boxOrigin}>
              <Text style={styles.title}>Origin</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => setModalKota (true)}
                style={styles.boxItem}
              >
                <Text style={styles.listOrigin}>
                  {' '}
                  {Kota.length === 0 ? 'Pilih Kota' : Kota}
                  {' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalKecamatan (true)}
                style={styles.boxItem}
              >
                <Text style={styles.listOrigin}>
                  {' '}
                  {kecamatan.length === 0 ? 'Pilih Kecamatan' : kecamatan}
                  {' '}
                </Text>
              </TouchableOpacity>
            </View>
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
