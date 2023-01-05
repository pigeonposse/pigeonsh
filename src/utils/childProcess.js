/**
 * Child_process.
 *
 * @description For execute command.
 *
 */

import * as os       from 'os'
import { spawnSync } from 'child_process'

export const childProcess = ( value ) => {
    
	const userInfo = os.userInfo()

	spawnSync( value, {
		stdio : 'inherit',
		shell : true,
		uid   : userInfo.uid,
		gid   : userInfo.gid,
	} )

}
