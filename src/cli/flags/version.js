/**
 * Run application.
 *
 * @description File that runs the app.
 *
 */

import { Cli } from '../_super.js'

export class Version extends Cli {
   
	constructor( args ) {

		super( args )
		this.cmds    = [ '--version' ]
		this.aliases = [ '-v' ]
        
	}

	#versionTxt(){
		
		let res 

		res  = this.utils.text.standard( 'Version ' )
		res += this.utils.text.infoBg( ` ${this.args.version} ` )
		
		return this.utils.not.standard( res )

	}

	run(){

		return this.#versionTxt()

	}

}
