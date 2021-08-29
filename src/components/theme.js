import { Dimensions } from "react-native";
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get("window");

export const COLORS = {
	green: "#003F3A",
	red: "#E13740",
	yellow: "#FFC502",
	skyblue:"#99BEF0",

	lightGray: "#C3C3C3",
	gray: "#555555",
	white: "#FFFFFF",
	orange: "#E88153",
	DarkGray: "#8A8A8F",
	black: "#000000"

}

export const SIZES = {

	//app dimensions
	width,
	height

}

const getFonts = () => {
	return Font.loadAsync({
		'NEXONLv1GothicRegular': require('../../assets/fonts/NEXONLv1GothicRegular.ttf'),
		'NanumSquareR': require('../../assets/fonts/NanumSquareR.ttf'),
		'NanumSquareL': require('../../assets/fonts/NanumSquareL.ttf'),
		'NanumSquareB': require('../../assets/fonts/NanumSquareB.ttf'),
		'NanumSquareEB': require('../../assets/fonts/NanumSquareEB.ttf'),
	})
}

getFonts();

export const FONTS = {
	NexonRegular: 'NEXONLv1GothicRegular', 
	NanumSquareR: 'NanumSquareR',
	NanumSquareL: 'NanumSquareL',
	NanumSquareB: 'NanumSquareB',
	NanumSquareEB: 'NanumSquareEB',
}