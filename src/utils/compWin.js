
/**
 * Dirs.
 *
 * @description For directory functions.
 *
 */

import Os from 'os'

export const isWindows = () => {

	return Os.platform() === 'win32'

}

export const compwin = ( src ) => {

	if ( isWindows() ) {
 
		src = src.startsWith( '/' ) ? src.substring( 1 ) : src
	
	}

	return src

} 
