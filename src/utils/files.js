/**
 * Files.
 *
 * @description For file functions.
 *
 */

import { existsSync } from 'fs'

export const fileExists = ( file ) => {

	if ( existsSync( file ) ) return true 

	return false

}
