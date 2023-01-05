/**
 * Functions for application messages.
 *
 * @description Functions for application messages.
 *
 */

import { text } from './text.js'

const setMsg = ( type, title, value ) =>{

	let res, typeBg

	typeBg = type + 'Bg' 

	res  = text[typeBg]( title )
	res += ' '
	res += text[type]( value )

	return res

}

const setText = ( type, value ) =>{

	let res

	switch( type ){

		case 'error' :
			res = setMsg( type, ' ERROR ', value )
			break
		case 'success' :
			res = setMsg( type, ' SUCCESS ', value )
			break
		case 'info' :
			res = setMsg( type, ' INFO ', value )
			break
		case 'warn' :
			res = setMsg( type, ' WARNING ', value )
			break
		default : 
			res = value
	
	}

	return res

}

const setConsole = ( type, value ) => {

	let log = 'log'

	if ( type == 'error' || type == 'warn' ) log = type

	return console[log]( setText( type, value ) )

}

const setConsoleGroup = ( type, title, value ) => {

	let log = 'log'

	if ( type == 'error' || type == 'warn' ) log = type

	console.group( setText( type, title ) )
	console[log]( value )
	console.groupEnd()

}

export const not = {
	standard     : ( value ) => console.log( value ),
	error        : ( value ) => setConsole( 'error', value ),
	warn         : ( value ) => setConsole( 'warn', value ),
	info         : ( value ) => setConsole( 'info', value ),
	success      : ( value ) => setConsole( 'success', value ),
	throwError   : ( value ) => setText( 'error', value ),
	throwSuccess : ( value ) => setText( 'success', value ),
	throwInfo    : ( value ) => setText( 'info', value ),
	throwWarn    : ( value ) => setText( 'warn', value ),
	groupSuccess : ( title, value ) => setConsoleGroup( 'success', title, value ),
	groupInfo    : ( title, value ) => setConsoleGroup( 'info', title, value ),
	groupWarn    : ( title, value ) => setConsoleGroup( 'warn', title, value ),
	group        : ( title, value ) => setConsoleGroup( '', title, value ),
	blankLine    : () => console.log( ),
}
