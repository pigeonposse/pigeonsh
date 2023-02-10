
/**
 * Super class for cmds.
 *
 * @description Super class for cmds.
 *
 */

import * as os        from 'os'
import { isWindows }  from '../utils/compWin.js'
import { not }        from '../utils/notifications.js'
import { text }       from '../utils/text.js'
import { getPkgPath } from '../utils/dirs.js'

export class Cli {

	infoFiledefaultVersion = '1.0.0'
	infoFileExts = [ 'yml', 'yaml', 'json' ]
	mainFileTypes = this.#getmMainFileTypes()
	mainFileExts = this.#getMainFileExts()
	
	#getmMainFileTypes(){

		let res 

		res = [
			{
				cli  : 'source',
				exts : [ 'sh', 'zsh' ],
			},
			{
				cli  : 'node',
				exts : [ 'js' ],
			},
			{
				cli  : 'python',
				exts : [ 'py' ],
			}, 
		]

		if ( isWindows() ) {

			res.push(
				{
					cli  : '',
					exts : [ 'bat' ],
				},
			)
		
		}
		
		return res
	
	}

	#getMainFileExts(){

		return this.mainFileTypes.flatMap( v => v.exts )
	
	}

	constructor( args ) {
	
		this.args               = args
		this.scriptsPath        = os.homedir() + '/.scriptsrc'
		this.defaultsPath       = getPkgPath( 'data' )
		this.defaultScriptsPath = this.scriptsPath + '/default'
		this.utils              = {
			not  : not,
			text : text,
		}

	}

}
