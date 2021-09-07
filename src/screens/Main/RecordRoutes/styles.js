import {StyleSheet} from 'react-native'
import { COLORS, FONTS, SIZES } from "../../../components/theme";

const styles = StyleSheet.create({
  containerfull:{
    backgroundColor:COLORS.green,
  },
  header:{
    width:SIZES.width,
    height:104,
    paddingTop:38,
    paddingHorizontal:24,
    backgroundColor:COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height:2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    //position:'absolute',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  header_text:{
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.black,
    fontSize:20,
  },
  body_container: {
    height:SIZES.height-104,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  info_textcontainer: {
    marginTop: 20,    
  },
  info_text: {
    fontFamily: FONTS.NanumSquareEB,
    color: COLORS.black,
    fontSize: 24,
    marginBottom: 16
  },
  main_categorytext:{
    fontFamily:FONTS.NanumSquareEB,
    color:COLORS.gray,
    fontSize:24,
    marginLeft:20
  },
  main_categorycard:{
    backgroundColor: COLORS.white, 
    width:SIZES.width-48,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:20,
    borderBottomWidth:0.5,
    borderBottomColor:COLORS.lightGray,    
  },
})

export default styles;