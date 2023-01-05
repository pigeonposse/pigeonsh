
/**
 * Super class for cmds.
 *
 * @description Super class for cmds.
 *
 */

import * as os   from 'os'
import * as path from 'path' 
import { not }   from '../utils/notifications.js'

export class Cli {

	constructor( args ) {

		this.args               = args
		this.scriptsPath        = os.homedir() + '/.scriptsrc'
		this.defaultsPath       = path.resolve( 'src/data' )
		this.defaultScriptsPath = this.scriptsPath + '/defaults'
		this.utils              = {
			not : not,
		}

	}

}
