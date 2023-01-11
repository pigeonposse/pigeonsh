/**
 * Class [CmdScriptFiles] for extend cmds.
 *
 * @description This class is used to get script data.
 *
 */

import { getObjectFile } from '../../../utils/getObjectFile.js' 
import { getFile }       from '../../../utils/files.js'
import { CmdDefaults }   from './defaults.js'

export class CmdScriptFiles extends CmdDefaults {

	/**
	 * Get ALL script data object.
	 *
	 * @param   {string} path - String of the path to search.
	 * @param   {string} name - File Name of path. 
	 * @param   {string} type - type of the list you want to set. 
	 *                        If 'default' set default in type property.
	 *                        If 'user' set user in type property.
	 * @returns {object}      - Returns an object with script data.
	 * @public
	 */
	getScriptData( path, name, type = 'default' ){

		let res
        
		res = false

		this.mainFileTypes.forEach( val => {

			let file = this.#getMainFilePath( path, val.exts )

			if ( !file ) return 

			res = {
				cli      : val.cli,
				path     : path,
				mainPath : file,
				name     : name,
				type     : type,
				info     : this.#getScriptInfoData( path ),
			}

		} )

		return res
	
	}

	/**
	 * Get INFO script data object.
	 *
	 * @param   {string} path - String of the path to search.
	 * @returns {object}      - Returns an object with script info data.
	 * @private
	 */
	#getScriptInfoData( path ){
        
		let res, defaultData, infoPath

		defaultData = {
			version : this.infoFiledefaultVersion,
			path    : path,
		}

		res        = {}
		res.exists = false
		res.data   = defaultData

		infoPath = this.#getInfoFilePath( path )

		if ( !infoPath ) return res 
			
		res = {
			exists : true,
			path   : infoPath,
			data   : {
				...defaultData,
				...getObjectFile( infoPath ),
			},
		}

		return res
    
	}

	/**
	 * Get info file path of specific path.
	 *
	 * @param   {string}         path - String of the path where the file will be searched.
	 * @returns {boolean|string}      - Returns path string if exist, if not returns false.
	 */
	#getInfoFilePath( path ){

		return getFile( path, 'info', this.infoFileExts )
	
	}

	/**
	 * Get main file path of specific path.
	 *
	 * @param   {string}         path - String of the path where the file will be searched.
	 * @param   {Array}          exts - Array of extensions to find the file.
	 * @returns {boolean|string}      - Returns path string if exist, if not returns false.
	 */
	#getMainFilePath( path, exts ){

		return getFile( path, 'main', exts )

	}

}
