import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SIZES } from "../../components/theme";

const Styles = StyleSheet.create({
  containerfull: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    width: SIZES.width,
    height: 104,
    paddingTop: 38,
    paddingHorizontal: 24,
    backgroundColor: COLORS.white,
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header_text:{
    fontFamily:FONTS.NanumSquareB,
    color:COLORS.black,
    fontSize:20,
  },
  body_container: {
    flex: 1,
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
  input_container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 128,
    //backgroundColor: COLORS.orange,
  },
  input_infotext: {
    fontFamily: FONTS.NanumSquareB,
    color: COLORS.black,
    fontSize: 14,
  },
  input_blank:{
    height:14,
    // backgroundColor:COLORS.gray
  },
  inputbox_container: {
    height: 40,
    width: "100%",
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input_box: {
    //fontFamily:FONTS.NanumSquareB,
    width: 200,
    color: COLORS.black,
    fontSize: 18,
  },
  input_box_pw: {
    //fontFamily:FONTS.NanumSquareB,
    width: 300,
    color: COLORS.black,
    fontSize: 18,
  },
  input_text: {
    //fontFamily:FONTS.NanumSquareB,
    color: COLORS.black,
    fontSize: 18,
  },
  input_button: {
    width: "100%",
    height: 48,
    backgroundColor: COLORS.skyblue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input_buttontext: {
    fontFamily: FONTS.NanumSquareB,
    color: COLORS.white,
    fontSize: 16,
  },
})

export default Styles;