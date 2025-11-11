import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  vineCardContainer:{
    flexDirection:"row",
    margin:5,
    backgroundColor:"#bd8264",
    width:340,
    height:120,
    borderRadius:20

    
  },
  textsContainer:{
    height:100,
    width:240,
    margin:10,
    textAlign:'center',
  },

  textsTitle:{
    color:'white',
    fontWeight:'bold',
    margin:5
  },
  textsDescription:{
    color:'white',
    margin:5,
    fontSize:15
  },



  imgContainer:{
    height:100,
    width:50,
    margin:10
  },
  img:{
    height:100,
    width:50,
    resizeMode:'center'
  }
   
  });

export default styles