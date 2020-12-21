//import liraries
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {color} from 'react-native-reanimated';
import Header from '../../components/hedear';

// create a component
const Results = ({route, navigation}) => {
  const [results, setResults] = useState ([]);
  const [costs, setCosts] = useState ([]);

  useEffect (() => {
    getResult ();
  }, []);

  const getResult = () => {
    fetch (
      `https://api.rajaongkir.sipondok.com/v1/tarif?dari=${route.params.kecamatanID}&ke=${route.params.kecamatanIDTujuan}&berat=${route.params.berat}&kurir=${route.params.kurirValue}&jenis_dari=${route.params.jenisID}&jenis_ke=${route.params.jenisID}`
    )
      .then (result => result.json ())
      .then (result => {
        const COSTS = result.results[0];
        console.log (COSTS.costs);
        setResults (result.results);
        setCosts (COSTS.costs);
      })
      .catch (error => console.log (error));
  };

  const onPress = () => {
    navigation.goBack ();
  };

  const renderResults = () => {
    return costs.map ((value, index) => {
      return (
        <View
          key={index}
          style={{
            backgroundColor: '#FFA000',
            padding: 3,
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            margin: 5,
          }}
        >
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
            {value.service}
          </Text>
          <Text style={{color: '#fff', fontSize: 10}}>{value.description}</Text>
          <View>
            {value.cost.map ((value, index) => {
              return (
                <View key={index} style={{padding: 10}}>
                  <Text style={{color: '#fff', fontSize: 14}}>
                    Rp. {value.value}
                  </Text>
                  <Text style={{color: '#fff', fontSize: 13}}>
                    {value.etd}
                  </Text>
                  {value.note.length == 0
                    ? null
                    : <Text style={{color: '#fff', fontSize: 13}}>
                        {' '}Note : {value.note}
                      </Text>}
                </View>
              );
            })}
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Rate Search Results" onPress={onPress} />
      {results.length == 0
        ? <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          >
            <ActivityIndicator size="large" color="#FFA000" />
          </View>
        : <ScrollView>
            <Text style={{margin: 10, fontWeight: 'bold', fontSize: 20}}>
              {results[0].name}
            </Text>
            {costs.length == 0
              ? <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: '#FFA000',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 9,
                      },
                      shadowOpacity: 0.50,
                      shadowRadius: 12.35,
                      elevation: 19,
                    }}
                  >
                    Tidak Costs
                  </Text>
                </View>
              : <View style={{flex: 1, margin: 10, marginTop: 0}}>
                  {renderResults ()}
                </View>}
          </ScrollView>}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Results;
