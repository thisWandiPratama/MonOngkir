import {StyleSheet} from 'react-native';
import {primer} from './_color';
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  iconHeader: {
    height: 50,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 25,
    width: 25,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
  },
  boxTitle: {
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 10,
  },
  ongkir: {
    color: primer,
  },
  conContent: {
    height: 80,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop : 15
  },
  boxMenu: {
    height: 75,
    width: 80,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderRadius : 5
  },
  list: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rateTitle: {
    textAlign: 'center',
    fontSize : 12,
    color : 'rgba(0,0,0,0.7)'
  },
});

export {styles};
