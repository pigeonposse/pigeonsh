
/**
 * Class [update] for extend cmds.
 *
 * @description Class [update] for extend cmds.
 *
 * @todo Create funtion for update default scripts.
 */

import * as dir from '../../../utils/dirs.js'
import { Cli }  from '../../_super.js'

export class CmdDefaults extends Cli {
    
	#scriptsFolderExists() {

		return dir.dirExists( this.scriptsPath )
    
	}

	#defaultScriptsExists() {

		return dir.dirExists( this.defaultScriptsPath )
    
	}

	#addDefaultScripts(){

		dir.copyDir( 
			this.defaultsPath, 
			this.defaultScriptsPath, 
		)

		this.utils.not.info( 
			'Add default scripts in: ' + this.defaultScriptsPath,
		)

		return true

	}

	#addScriptsFolder(){

		dir.addDir( this.scriptsPath )
		
		this.utils.not.info( 
			'Created scripts folder in: ' + this.scriptsPath,
		)
	
	}
	
	addDefaults(){

		if ( !this.#scriptsFolderExists() ) this.#addScriptsFolder()
		if ( !this.#defaultScriptsExists() ) return this.#addDefaultScripts()

	}
	
	scriptsFolder() {
		
		this.addDefaults()
	
	}

}
