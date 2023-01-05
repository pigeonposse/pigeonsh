
/**
 * Class for cmds [script-name].
 *
 * @description Class for cmds [script-name].
 *
 */

import { Cmd }          from './_super.js' 
import { childProcess } from '../../utils/childProcess.js'

export class ScriptName extends Cmd {

	constructor( args ) {

		super( args )
		this.cmds    = this.getScriptsListKey( 'name' )
		this.aliases = [ ]
        
	}
	
	execCmd( cmd, params ){

		let cli, data
		
		data = this.getScript( cmd )

		if( !data || data === undefined ) return this.utils.not.error( `Script [${cmd}] does not exist` )

		cli = `${data.cli} ${data.mainPath} ${params.join( ' ' )}`
        
		this.utils.not.info( 'Execute: ' + cli )
		
		childProcess( cli )
	
	}

	run(){

		let cmd, params

		cmd    = this.args['args'][0]
		params = this.args['args'].slice( 1 )

		this.execCmd( cmd, params )

	}
    
}
