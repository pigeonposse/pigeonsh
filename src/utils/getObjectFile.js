/**
 * Get object file.
 *
 * @description Function to return the object of a file.
 *
 */
import * as fs      from 'fs'
import { isObject } from './object.js'
import yaml         from 'js-yaml'
import { not }      from './notifications.js'

export const getObjectFile = ( file ) => {

	let res

	res = fs.readFileSync( 
		file,
		{
			encoding : 'utf-8',
		}, 
	)

	if ( file.endsWith( '.yml' ) || file.endsWith( '.yaml' ) ) {

		res = yaml.load( res )
	
	}else {

		res = JSON.parse( res )
	
	}

	if( !isObject( res ) ) throw not.throwError( 'File "' + file + '" must return a object' )
	
	return res

}
