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

	getVersion(){

		return this.utils.not.standard(  
			`${this.args.cli}@${this.args.version}`,
		)

	}

	run(){

		return this.getVersion()

	}

}
