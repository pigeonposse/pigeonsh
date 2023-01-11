
/**
 * Class for get cmds.
 *
 * @description Class for get cmds.
 *
 */

import { List }       from './cmds/list.js' 
import { Exec }       from './cmds/exec.js' 
import { ScriptName } from './cmds/scriptName.js' 
import { Info }       from './cmds/info.js' 
import { Help }       from './flags/help.js'
import { Version }    from './flags/version.js'

export class Cmds {

	constructor( args ) {

		this.args  = args
		this.opts  = [ List, ScriptName, Info, Exec ]
		this.flags = [ Help, Version ]

	}

	#getType( types, arg ) {

		let res 

		res = {
			exists : false,
		}
        
		types.forEach( value => {

			let klass = new value( this.args )
			
			if ( klass.cmds.includes( arg ) || klass.aliases.includes( arg ) ) {

				res.exists = true 
				res.funct  = klass.run()
            
			}
        
		} )

		return res
    
	}

	getOpts( arg ) {

		return this.#getType( this.opts, arg )
	
	}

	getFlags( arg ){

		return this.#getType( this.flags, arg )
	
	}

}
