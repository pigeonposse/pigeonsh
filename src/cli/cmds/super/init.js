
/**
 * Class [init] for extend cmds.
 *
 * @description Class [init] for extend cmds.
 *
 */

import * as fs          from 'fs'
import { CmdUpdate }    from './update.js'
import { childProcess } from '../../../utils/childProcess.js'

export class CmdInit extends CmdUpdate {

	scriptsFolderExists() {

		if ( fs.existsSync( this.scriptsPath ) ) return true

		return false
    
	}

	createScriptsFolder(){

		childProcess(
			`mkdir ${this.scriptsPath} && cp -R ${this.defaultsPath} ${this.defaultScriptsPath}`,
		)
		
		this.utils.not.info( 
			'Created scripts folder in: ' + this.scriptsPath,
		)

	}

	scriptsFolder() {

		if ( this.scriptsFolderExists() ) return this.updateScripts()
        
		return this.createScriptsFolder()

	}

}
