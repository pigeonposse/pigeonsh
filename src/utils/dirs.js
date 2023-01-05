/**
 * Dirs.
 *
 * @description For directory functions.
 *
 */

import { readdirSync } from 'fs'

export const getDirs = ( source ) => {

	return readdirSync( source, { withFileTypes: true } )
		.filter( dirent => dirent.isDirectory() )
		.map( dirent => dirent.name )

}
