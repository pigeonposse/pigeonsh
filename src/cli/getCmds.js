
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

	getType( types, arg ) {

		let res 

		res = {
			exists : false,
		}
        
		types.forEach( value => {

			let c = new value( this.args )
        
			if ( c.cmds.includes( arg ) || c.aliases.includes( arg ) ) {

				res.exists = true 
				res.funct  = c.run()
            
			}
        
		} )

		return res
    
	}

	getOpts( arg ) {

		return this.getType( this.opts, arg )
	
	}

	getFlags( arg ){

		return this.getType( this.flags, arg )
	
	}

}
