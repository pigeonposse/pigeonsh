
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

const runCli = () => {

	let core, args, arg, flags, opts

	core = new Cmds( data )
	args = data.args

	for ( arg of args ) {

		flags = core.getFlags( arg )
		opts  = core.getOpts( arg ) 

		if ( flags.exists ) return flags.funct
		if ( opts.exists ) return opts.funct

		return not.error( `[${arg}] does not exist` ) 

	}

}

export const cli = () => {

	let curCMDarg

	curCMDarg = data.args[0]

	if ( !curCMDarg ) return not.error( 'command need a argument.' )

	runCli()

}
