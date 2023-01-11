
/**
 * Data for cli functions.
 *
 * @description Data for cli functions.
 *
 */

import { getPkgObject } from '../utils/getObjectFile.js'

export const dataObj = () => {

	let pkg = getPkgObject()
	
	return {
		cli      : Object.keys( pkg.bin )[0],
		aliasCli : Object.keys( pkg.bin )[1],
		currCli  : process.argv[1],
		version  : pkg.version,
		args     : process.argv.slice( 2 ),
	} 

} 
