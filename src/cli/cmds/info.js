
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

	#errNoParam( prop ){

		let res 
		res  = `Property [${prop}] needs a parameter.`
		res += this.utils.text.blankLine
		res += 'Allowed parameters: ' + this.scriptNames.join( ', ' )

		return this.utils.not.error( res )
	
	}

	#errNoExistParam( param ){

		return this.utils.not.error( 
			`Script [${param}] does not exist.`, 
		)
	
	}

	run(){

		let cmd, parameter, data

		cmd       = this.args['args']
		parameter = cmd[1]

		if( !parameter ) return this.#errNoParam( cmd[0] )
		if( !this.scriptNames.includes( parameter ) ) return this.#errNoExistParam( parameter )

		data = this.getScriptDataByName( parameter )['info']['data']
		
		console.log( 
			this.utils.text.info( `[${parameter}] Info:` ) + this.utils.text.blankLine,
		)
		
		console.log( data )
	
	}

}
