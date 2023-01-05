
/**
 * Class for cmds [script-name].
 *
 * @description Class for cmds [script-name].
 *
 */

import { ScriptName } from './scriptName.js' 

export class Exec extends ScriptName {

	constructor( args ) {

		super( args )
		this.cmds    = [ 'exec' ]
		this.aliases = [ ]
        
	}
    
	run(){

		let cmd, params

		cmd    = this.args['args'][1]
		params = this.args['args'].slice( 2 )
		
		this.execCmd( cmd, params )

	}

}
