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
  const [KotaTujuan, setKotaTujuan] = useState ('');
  const [kotaIDTujuan, setkotaIDTujuan] = useState ();
  const [jenisID, setJenisID] = useState ();
  const [kecamatan, setKecamatan] = useState ([]);
  const [kecamatanID, setKecamatanID] = useState ();
  const [kecamatanTujuan, setKecamatanTujuan] = useState ('');
  const [kecamatanIDTujuan, setKecamatanIDTujuan] = useState ();
  const [allKota, setAllKota] = useState ([]);
  const [allKecamatan, setAllKecamatan] = useState ([]);
  const [allKecamatanTujuan, setAllKecamatanTujuan] = useState ([]);
  const [modalKota, setModalKota] = useState (false);
  const [modalKecamatan, setModalKecamatan] = useState (false);
  const [modalKotaTujuan, setModalKotaTujuan] = useState (false);
  const [modalKecamatanTujuan, setModalKecamatanTujuan] = useState (false);

  useEffect (() => {
    getKota ();
    setTimeout (() => {
      if (allKota.length > 0) {
        getKecamatan ();
      }
    }, 3000);
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

  const renderListKotaTujuan = () => {
    return allKota.map ((value, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setKotaTujuan (value.city_name);
            setkotaIDTujuan (value.city_id);
            setModalKotaTujuan (false);
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

  const getKecamatanTujuan = () => {
    fetch (`https://api.rajaongkir.sipondok.com/v1/kecamatan/kota/${kotaIDTujuan}`)
      .then (result => result.json ())
      .then (result => {
        setAllKecamatanTujuan (result);
        setKecamatanTujuan (result[0].subdistrict_name);
        setKecamatanIDTujuan (result[0].subdistrict_id);
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

  const renderListKecamatanTujuan = () => {
    return allKecamatanTujuan.map ((value, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setKecamatanTujuan (value.subdistrict_name);
            setKecamatanIDTujuan (value.subdistrict_id);
            setJenisID ('kecamatan');
            setModalKecamatanTujuan (false);
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

      <Modal animationType="slide" transparent={true} visible={modalKotaTujuan}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Pilih Kota Tujuan Anda
            </Text>
            <TouchableHighlight
              style={styles.cancel}
              onPress={() => {
                setModalKotaTujuan (!modalKotaTujuan);
              }}
            >
              <Text style={styles.titleCancel}>X</Text>
            </TouchableHighlight>
            <ScrollView>
              <View style={styles.listKota}>
                {renderListKotaTujuan ()}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalKecamatanTujuan}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Pilih Kecamatan Tujuan Anda
            </Text>
            <TouchableHighlight
              style={styles.cancel}
              onPress={() => {
                setModalKecamatanTujuan (!modalKecamatanTujuan);
              }}
            >
              <Text style={styles.titleCancel}>X</Text>
            </TouchableHighlight>
            <ScrollView>
              <View style={styles.listKota}>
                {renderListKecamatanTujuan ()}
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
                onPress={() => {
                  if (allKota.length === 0) {
                    getKota ();
                  }
                  setModalKota (true);
                }}
                style={styles.boxItem}
              >
                <Text style={styles.listOrigin}>
                  {' '}
                  {Kota.length === 0 ? 'Pilih Kota' : Kota}
                  {' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (allKecamatan.length === 0) {
                    getKecamatan ();
                  }
                  setModalKecamatan (true);
                }}
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
            <View style={styles.boxOrigin}>
              <Text style={styles.title}>Destination</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => setModalKotaTujuan (true)}
                style={styles.boxItem}
              >
                <Text style={styles.listOrigin}>
                  {' '}
                  {KotaTujuan.length === 0 ? 'Pilih Kota' : KotaTujuan}
                  {' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  getKecamatanTujuan()
                  setModalKecamatanTujuan (true);
                }}
                style={styles.boxItem}
              >
                <Text style={styles.listOrigin}>
                  {' '}
                  {kecamatanTujuan.length === 0
                    ? 'Pilih Kecamatan'
                    : kecamatanTujuan}
                  {' '}
                </Text>
              </TouchableOpacity>
            </View>
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
