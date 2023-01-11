
/**
 * Dirs.
 *
 * @description For directory functions.
 *
 */

import * as fs   from 'fs'
import * as path from 'path'

export const dirExists = ( source ) => {

	if ( fs.existsSync( source ) ) return true

	return false

}

export const getDirNames = ( source ) => {

	return fs.readdirSync( source, { withFileTypes: true } )
		.filter( dirent => dirent.isDirectory() )
		.map( dirent => dirent.name )

}

export const addDir = ( dir ) => {

	if ( !fs.existsSync( dir ) ){

		return fs.mkdirSync( dir, { recursive: true } )
	
	}

}

export const copyDir = ( src, dest ) => {

	let exists, stats, isDirectory

	exists      = fs.existsSync( src )
	stats       = exists && fs.statSync( src )
	isDirectory = exists && stats.isDirectory()

	if ( isDirectory ) {

		fs.mkdirSync( dest )
		fs.readdirSync( src ).forEach( 
			( childItemName ) => {

				copyDir( path.join( src, childItemName ),
					path.join( dest, childItemName ) )
			
			},
		)
	
	} else {

		fs.copyFileSync( src, dest )
	
	}

}
