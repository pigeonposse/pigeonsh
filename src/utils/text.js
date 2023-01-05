/**
 * Functions for texts.
 *
 * @description Functions for texts.
 *
 */

import chalk from 'chalk'

const textStyle = ( style, txt ) => {

	return chalk[style]( txt )

}

const textStyles = ( style, style2, txt ) => {

	return chalk[style][style2]( txt )

}

const setTable = ( val ) => {

	console.table( val )

}

const setBlankLine = ( ) => {

	return '\n'

}

/**
 * EXPORT.
 *
 * Export the constant with all styles.
 */
export const text = {
	dim       : ( txt ) => textStyle( 'dim', txt ),
	standard  : ( txt ) => textStyle( 'white', txt ),
	info      : ( txt ) => textStyle( 'gray', txt ),
	error     : ( txt ) => textStyle( 'red', txt ),
	warn      : ( txt ) => textStyle( 'yellow', txt ),
	success   : ( txt ) => textStyle( 'green', txt ),
	group     : ( txt ) => textStyle( 'cyan', txt ),
	title     : ( txt ) => textStyle( 'cyan', txt ),
	titleDim  : ( txt ) => textStyles( 'cyan', 'dim', txt ),
	infoBg    : ( txt ) => textStyles( 'black', 'bgGray', txt ),
	errorBg   : ( txt ) => textStyles( 'whiteBright', 'bgRed', txt ),
	successBg : ( txt ) => textStyles( 'whiteBright', 'bgGreen', txt ),
	warnBg    : ( txt ) => textStyles( 'black', 'bgYellow', txt ),
	custom    : ( style, txt ) => textStyle( style, txt ),
	table     : ( val ) => setTable( val ),
	blankLine : setBlankLine(),
}
