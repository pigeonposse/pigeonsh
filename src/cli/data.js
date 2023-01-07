
/**
 * Data for cli functions.
 *
 * @description Data for cli functions.
 *
 */

import { getObjectFile } from '../utils/getObjectFile.js'

export const dataObj = () => {

	const path = new URL('../../package.json', import.meta.url)
	const pkg = getObjectFile( path.pathname )

	return {
		cli     : Object.keys( pkg.bin )[0],
		cmds    : [ 'list', 'info', 'exec' ],
		version : pkg.version,
		args    : process.argv.slice( 2 ),
	} 

} 
