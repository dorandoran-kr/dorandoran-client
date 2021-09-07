import {StyleSheet} from 'react-native'
import { COLORS, FONTS, SIZES } from "../../components/theme";

const Styles = StyleSheet.create({
  containerfull:{
    backgroundColor:COLORS.green,
    width:'100%',
    height:'100%',    
  },
  main_header_text:{
    fontSize:24,
    fontFamily:FONTS.NanumSquareEB,
    color:"#ffffff",
    marginTop:50,
    marginBottom:15,
    marginLeft:44,
  },
  main_whitecontainer:{
    flex:5,
    //height:'60%',
    width:'100%',
    backgroundColor:COLORS.backgray,
    borderTopLeftRadius:40,
    borderTopRightRadius:40,  
  },
  main_whitecontainer_box:{    
    height:154,
    backgroundColor:COLORS.white,
    elevation:2,
    marginTop:40,
    marginHorizontal:40,
    borderRadius:20,
    padding:36,
  },
  main_whitecontainer_text:{
    fontSize:16,
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.gray,
  },
  main_whitecontainer_text2:{
    fontSize:16,
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.green,
    marginTop:12,
  },
  tabbar:{
    width:296,
    height:64,
    backgroundColor:COLORS.white,
    elevation:1,
    borderRadius:32,
    alignSelf:'center',
    position:'absolute',
    bottom:32,
    justifyContent:'space-around',
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  tabbar_button:{
    width:70,
    height:70,
    borderRadius:35,
    backgroundColor:COLORS.green,
    alignSelf:'center',
    position:'absolute',
    elevation:2,
    bottom:48,
    alignItems:'center',
    justifyContent:'center'
  },
  main_category_text:{
    fontSize:20,
    fontFamily:FONTS.NanumSquareEB,
    color:COLORS.green,
    marginTop:28,
    marginLeft:40,
  },
  main_categorytext:{
    fontFamily:FONTS.NanumSquareEB,
    color:COLORS.white,
    fontSize:16,
  },
  main_categorycard:{
    backgroundColor: COLORS.green2, 
    marginTop:10,
    flex:1,
    width:140,
    borderRadius:20,
    marginRight:8,
    alignItems:'center',
    justifyContent:'center',
    // elevation:2,
    // marginVertical: 8,
    // marginLeft: 24,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
    // elevation: 2,
    // borderWidth:0.3,
    // borderColor:COLORS.lightGray
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
    position:'absolute',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  header_text:{
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.black,
    fontSize:20,
  },
  main_bluebox:{
    width:"100%",
    height:SIZES.height*0.55,
    backgroundColor:"#99BEF0",
    borderBottomLeftRadius: 30,
    paddingTop:100,     
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
    elevation:2,
    alignItems:'center',
    justifyContent:'center'
  },
  main_categorycontainer:{
    height:SIZES.height*0.5,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    paddingTop:SIZES.height*0.05,
  },
  main_categorytitle:{
    fontFamily:FONTS.NanumSquareEB,
    color:COLORS.gray,
    fontSize:20,
    marginLeft:24,
    marginBottom:10,
  },
  
  
  category_listcontainer:{
    backgroundColor:COLORS.white, 
    height:SIZES.height,
  },
  category_list:{    
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:24,
    marginTop:20,
  },
  category_profile:{
    width:52,
    height:52,
    borderRadius:26,
    backgroundColor:COLORS.lightGray,
  },
  category_textcontainer:{
    width:SIZES.width-110,
    borderBottomWidth:0.5,
    borderBottomColor:COLORS.lightGray,
  },
  category_text1:{
    fontFamily:FONTS.NanumSquareEB,
    color:COLORS.black,
    fontSize:18,
    marginTop:8,
  },
  category_text2:{
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.DarkGray,
    fontSize:14,
    marginTop:8,
    marginBottom:10,
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