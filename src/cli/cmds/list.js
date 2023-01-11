
/**
 * Class for cmd [list].
 *
 * @description Class for cmd [list].
 *
 */

import { Cmd } from './_super.js' 

export class List extends Cmd {
   
	constructor( args ) {

		super( args )
		this.cmds    = [ 'list' ]
		this.aliases = [ 'l' ]
        
	}

	run(){

		let list

		list = this.scriptNames.join( '\n' )

		console.log( list ) 
	
	}

}
