import {StyleSheet} from 'react-native';
import {primer} from './_color';

const styles = StyleSheet.create ({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: primer,
    flexDirection: 'row',
    alignItems : 'center'
  },
  icon: {
    height: 30,
    width: 30,
  },
  title : {
      color : '#fff',
      fontWeight : 'bold', 
      fontSize : 18
  }
});

export {styles};
