
/**
 * Run application.
 *
 * @description File that runs the app.
 *
 */

import { Version } from './version.js'

export class Help extends Version {
   
	constructor( args ) {

		super( args )
		this.cmds    = [ '--help' ]
    	this.aliases = [ '-h' ]
        
	}

	run(){

		let res, args

		args = this.args

		res = this.utils.not.info( 'Used to unify the shell scripts in a single point and list or execute them.\n' )
  
		res += this.utils.not.standard( `${args.cli} <command>\n` )

		res += this.utils.not.group( 
			'Usage:', 
			`
	    ${args.cli} <script-name>  Run the script with the same name.
	    ${args.cli} list           Displays a list of available script names.
	    ${args.cli} info           Show script information if it exists.
	        `,
		)

		res += this.utils.not.group( 
			'All commands:', 
			`
	    ${args.cmds.join( ', ' )}
	        `,
		)

		res += this.getVersion( )

		return res
	
	}

}
