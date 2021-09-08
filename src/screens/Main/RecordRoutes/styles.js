import {StyleSheet} from 'react-native'
import { COLORS, FONTS, SIZES } from "../../../components/theme";

const styles = StyleSheet.create({
  containerfull:{
    backgroundColor:COLORS.green,
    width:'100%',
    height:'100%',
  },
  backscreen:{
    height:15,
    width:'95%',
    backgroundColor:COLORS.gray,
    position:'absolute',
    top:40,
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
    lineHeight:30
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
  record_questionbox:{
    backgroundColor:COLORS.white,
    width:"100%",
    height:128,
    elevation:1,
    borderRadius:20,
    padding:24,
    marginVertical:24,
    justifyContent:'center'
  },
  rando_image:{
    backgroundColor:COLORS.green2,
    width:200,
    height:200,
    borderRadius:100,
    justifyContent:'flex-end',
    alignItems:'center',
    paddingRight:2,
    alignSelf:'center'
  },
  rando_hand_container:{
    width: 180,
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    marginTop: 175,
    left: SIZES.width * 0.5 - 90-30,
    justifyContent: "space-around",
  },
  rando_hand:{
    backgroundColor: COLORS.white,
    width: 30,
    height: 30,
    borderRadius: 20,
    elevation: 2,
  },
  record_recordbutton:{
    width:72,
    height:72,
    borderRadius:36,
    backgroundColor:COLORS.green,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    
  },
  record_stopbutton:{
    width:72,
    height:72,
    borderRadius:36,
    backgroundColor:COLORS.red,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',    
  },
  record_stopbutton_center:{
    width:24, 
    height:24, 
    borderRadius:5, 
    backgroundColor:COLORS.white
  },
  record_playbutton:{
    width:72,
    height:72,
    borderRadius:36,
    backgroundColor:COLORS.gray,
    paddingLeft:2,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',    
  },
  record_upload:{
    width:125,
    height:50,
    borderRadius:25,
    borderWidth:2,
    borderColor: COLORS.green,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  record_button_text:{
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.green,
    fontSize:18,
  },
  record_again:{
    width:125,
    height:50,
    borderColor: COLORS.green,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  record_endbox:{
    width:"100%",
    backgroundColor:COLORS.white,
    elevation:1,
    borderRadius:20,
    padding:40,
    marginTop:60,
    marginBottom:30,
  },
  record_text:{
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.gray,
    fontSize:20,
    alignSelf:'center',
    lineHeight:30
  },
  green_longbutton:{
    width:'90%',
    height:48,
    borderRadius:15,
    backgroundColor:COLORS.green,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    marginTop:24,
  },
  green_longbutton_text:{
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.white,
    fontSize:16,
  },
})

export default styles;