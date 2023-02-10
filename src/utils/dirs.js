
/**
 * Dirs.
 *
 * @description For directory functions.
 *
 */

import { compwin } from './compWin.js'
import * as fs     from 'fs'
import * as path   from 'path'

export const dirExists = ( src ) => {

	src = compwin( src )  

	if ( fs.existsSync( src ) ) return true

	return false

}

export const getPkgPath = ( src ) => {
	
	let path, res
	
	path = new URL( '../../', import.meta.url )
	res  = path.pathname + src

	return res

}

export const getDirNames = ( src ) => {

	src = compwin( src ) 
 
	return fs.readdirSync( src, { withFileTypes: true } )
		.filter( dirent => dirent.isDirectory() )
		.map( dirent => dirent.name )

}

export const addDir = ( dir ) => {

	dir = compwin( dir )  

	if ( !fs.existsSync( dir ) ){

		return fs.mkdirSync( dir, { recursive: true } )
	
	}

}

export const copyDir = ( src, dest ) => {

	let exists, stats, isDirectory

	src  = compwin( src )  
	dest = compwin( dest )  

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
