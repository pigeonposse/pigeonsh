
/**
 * Class [CmdScriptListData] for extend cmds.
 *
 * @description This class is used to get script lists data.
 *
 */

import { CmdScriptFiles } from './scriptFiles.js'
import { getDirNames }    from '../../../utils/dirs.js'

export class CmdScriptListData extends CmdScriptFiles {

	/**
	 * Get script list data object.
	 *
	 * @param   {string} type - type of the list you want to return. 
	 *                        If 'pkg' returns package list data.
	 *                        If 'default' returns default list data.
	 *                        If 'user' returns user list data.
	 *                        If empty returns mixed user and default lists data.
	 * @returns {object}      - Scripts object.
	 * @public
	 */
	getScriptListData( type = '' ) {

		let defaults, user, pkg, all

		pkg      = this.#setScriptListData( this.defaultsPath )
		user     = this.#setScriptListData( this.defaultScriptsPath )
		defaults = this.#setScriptListData( this.scriptsPath, 'user' )
		all      = {
			...user,
			...defaults,
		}
		
		if ( type == 'pkg' ) return pkg
		if ( type == 'user' ) return user
		if ( type == 'default' ) return defaults

		return all
		
	}

	/**
	 * Get script list data object.
	 *
	 * @param   {string} path - String of the path to search.
	 * @param   {string} type - type of the list you want to return. 
	 *                        If 'pkg' get package list data.
	 *                        If 'default' get default list data.
	 *                        If 'user' get user list data.
	 *                        If empty get mixed user and default lists data.
	 * @returns {object}      - Scripts data object.
	 * @private
	 */
	#setScriptListData( path, type = 'default' ){

		let dirName, dirNames, scriptsPath, res, data

		dirNames = getDirNames( path )
		res      = {}
        
		for( dirName of dirNames ) {

			scriptsPath = path + '/' + dirName

			data = this.getScriptData( 
				scriptsPath, 
				dirName,
				type, 
			)

			if ( data ) res[dirName] = data

		}

		return res
        
	} 

}
