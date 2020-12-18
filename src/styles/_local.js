import {StyleSheet} from 'react-native';
import { primer } from "./_color";

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  boxContainer: {
    margin: 25,
    backgroundColor: primer,
    height: '50%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius : 10,
    padding : 10
  },
  boxList : {
      height : 80,
  },
  title : {
      color : '#fff',
      fontSize : 14,
      fontWeight : 'bold'
  },
  input : {
      borderBottomWidth: 1,
      borderBottomColor : 'rgba(255,255,255,0.5)'
  },
  boxOrigin : {
    flexDirection : 'row',
    marginBottom : 10
  },
  kategori : {
    flexDirection :'row',
    paddingLeft: 10
  },
  kota : {
    width : 40,
    height : 25,
    alignItems:'center',
    justifyContent : 'center',
    marginRight : 10,
    borderRadius : 5
  },
  kecamatan : {
    width : 80,
    height : 25,
    alignItems:'center',
    justifyContent : 'center',
    borderRadius : 5
  },
  titleBtn : {
    fontSize: 15,
    fontWeight:'bold'
  }
});

export {styles};