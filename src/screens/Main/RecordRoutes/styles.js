import {StyleSheet} from 'react-native'
import { COLORS, FONTS, SIZES } from "../../../components/theme";

const styles = StyleSheet.create({
  containerfull:{
    backgroundColor:COLORS.green,
    width:'100%',
    height:'100%',
  },
  whitecontainer:{
    marginTop:36,
    flex:1,
    width:'100%',
    backgroundColor:COLORS.backgray,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,  
    padding:30,
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
  },
  header_title:{
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.gray,
    fontSize:18,
  },
  header_text:{
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.green2,
    fontSize:20,
    alignSelf:'center',
    marginBottom:12,
  },
  categorytext:{
    fontFamily:FONTS.NanumSquareEB,
    color:COLORS.gray,
    fontSize:18,
    marginLeft:20
  },
  categorycard:{
    backgroundColor: COLORS.white, 
    width:SIZES.width-96,
    height:56,
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:15,
    marginBottom:14,
    elevation:1,    
  },
  cautiontext:{
    fontFamily:FONTS.NanumSquareEB,
    color:COLORS.red,
    fontSize:16,
    marginBottom:10,
    alignSelf:'center'
  },
  questionbox:{
    backgroundColor:COLORS.white,
    padding:24,
    paddingBottom:36,
    borderRadius:15,
    marginHorizontal:6,
    marginBottom:12,
    elevation:1,
  },
  questionbox_text:{
    fontFamily:FONTS.NanumSquareEB,
    color:COLORS.gray,
    fontSize:18,
    lineHeight:30,
  },
})

export default styles;