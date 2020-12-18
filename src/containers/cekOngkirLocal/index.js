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
  const [kategori, setKategori] = useState ('kota');
  const [kategoriList, setKategoriList] = useState ('');
  const [kategoriID, setKategoriID] = useState ('kota');
  const [allKategori, setAllKategori] = useState ([]);
  const [modalVisible, setModalVisible] = useState (false);

  useEffect (() => {
    getKota ();
  }, []);

  const onPress = () => {
    navigation.goBack ();
    console.log ('Res');
  };

  const getKota = () => {
    fetch ('https://api.rajaongkir.sipondok.com/v1/kota')
      .then (result => result.json ())
      .then (result => {
        setAllKategori (result);
        setKategoriList (result[0].city_name);
        setKategoriID (result[0].city_id);
        console.log (result);
      })
      .catch (error => console.log (error));
  };

  const renderListKota = () => {
    return allKategori.map ((value, index) => {
      return (
        <TouchableOpacity onPress={() => {
          setKategoriList(value.city_name)
          setKategoriID(value.city_id)
          setModalVisible(false)
        }}>
          <Text style={styles.namaKota}>{value.city_name}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Pilih {kategori === 'kota' ? 'Kota' : 'Kecamatan'} Anda
            </Text>
            <TouchableHighlight
              style={styles.cancel}
              onPress={() => {
                setModalVisible (!modalVisible);
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
      <Header onPress={onPress} title="Rates Local" />
      <View style={styles.boxContainer}>
        <View style={styles.boxInput}>
          <View style={styles.boxList}>
            <View style={styles.boxOrigin}>
              <Text style={styles.title}>Origin</Text>
              <View style={styles.kategori}>
                <TouchableOpacity
                  onPress={() => {
                    setKategori ('kota');
                    getKota ();
                  }}
                  style={[
                    styles.kota,
                    {
                      backgroundColor: kategori === 'kota'
                        ? '#17941d'
                        : '#dfe0df',
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.titleBtn,
                      {color: kategori === 'kota' ? '#fff' : '#2f4858'},
                    ]}
                  >
                    Kota
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setKategori ('kecamatan')}
                  style={[
                    styles.kecamatan,
                    {
                      backgroundColor: kategori === 'kecamatan'
                        ? '#17941d'
                        : '#dfe0df',
                    },
                  ]}
                >
                  <Text
                    style={[
                      styles.titleBtn,
                      {color: kategori === 'kecamatan' ? '#fff' : '#2f4858'},
                    ]}
                  >
                    Kecamatan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible (true)}
              style={styles.boxItem}
            >
              <Text style={styles.listOrigin}>
                {' '}
                {kategoriList.length === 0
                  ? 'Pilih Kota/Kecamatan'
                  : kategoriList}
                {' '}
              </Text>
            </TouchableOpacity>
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
