/**
 * Files.
 *
 * @description For file functions.
 *
 */

import { existsSync } from 'fs'

/**
 * File exist ?
 *
 * @param   {string}  file - String of the file route.
 * @returns {boolean}      - Returns path string if exist, if not returns false.
 */
export const fileExists = ( file ) => {

	if ( existsSync( file ) ) return true 

	return false

}

/**
 * Get file path of specific path.
 *
 * @param   {string}         path     - String of the path where the file will be searched.
 * @param   {string}         nameFile - String of the name of the file to search for.
 * @param   {Array}          exts     - Array of extensions to find the file.
 * @returns {boolean|string}          - Returns path string if exist, if not returns false.
 */
export const getFile = ( path, nameFile = '', exts = [] ) => {
		
	let res, file, name

	res  = false
	name = nameFile ? '/' + nameFile : ''
	file = path + name

	if ( exts.length === 0 ) {
		
		if ( fileExists( file ) ) res = file

	}else {
	
		exts.forEach( ext => {
		
			file = path + name + '.' + ext
        
			if ( fileExists( file ) ) res = file
		
		} )

	}

	return res

}

