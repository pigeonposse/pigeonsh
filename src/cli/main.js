
/**
 * Call cli functions.
 *
 * @description Call cli functions.
 *
 */

import { not }     from '../utils/notifications.js'
import { dataObj } from './data.js' 
import { Cmds }    from './getCmds.js'

const data = dataObj()

export const cli = () => {

	let core, arg, flags, opts
    
	if ( !data.args[0] ) return not.error( 'command need a argument' )

	core = new Cmds( data )

	for ( arg of data.args ) {

		flags = core.getFlags( arg )
		opts  = core.getOpts( arg ) 
        
		if ( flags.exists ) return flags.funct
		if ( opts.exists ) return opts.funct

		return not.error( `[${arg}] does not exist` ) 

	}

}
