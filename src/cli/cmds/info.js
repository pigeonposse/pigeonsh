
/**
 * Class for cmd [info].
 *
 * @description Class for cmd [info].
 *
 */

import { Cmd } from './_super.js' 

export class Info extends Cmd {

	constructor( args ) {

		super( args )
		this.cmds    = [ 'info' ]
		this.aliases = [ 'i' ]
        
	}

	run(){

		let nameList, cmd, parameter

		nameList  = this.getScriptsListKey( 'name' )
		cmd       = this.args['args']
		parameter = cmd[1]

		if( !parameter ) return this.utils.not.error( `Property [${cmd[0]}] needs a parameter` )
		if ( !nameList.includes( parameter ) ) return this.utils.not.error( `Script [${parameter}] does not exist.` )
        
		console.log( this.getScript( parameter )['info']['data'] )
    
	}

}
