import {StyleSheet} from 'react-native'
import { COLORS, FONTS, SIZES } from "../../components/theme";

const Styles = StyleSheet.create({
  containerfull:{
    
  },
  main_bluebox:{
    width:"100%",
    height:440,
    backgroundColor:"#99BEF0",
    borderBottomLeftRadius: 30,
    paddingTop:100,     
  },
  main_blueboxtext:{
    fontSize:24,
    fontFamily:FONTS.NanumSquareEB,
    color:"#ffffff",
    marginBottom:15,
    marginLeft:44,
  },
  main_blueboxbutton:{
    height:144,
    width:144,
    borderRadius:72,
    backgroundColor:COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  main_categorycontainer:{
    justifyContent:'center',
  },
  main_categorytext:{
    fontFamily:FONTS.NanumSquareEB,
    color:COLORS.gray,
    fontSize:24,
    marginBottom:15,
    marginLeft:44,
  },


  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

export default Styles;