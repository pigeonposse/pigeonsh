
/**
 * Class [CmdScriptList] for extend cmds.
 *
 * @description This class is used script data lists functions.
 *
 */

import { CmdScriptListData } from './scriptListData.js'
//import * as dir              from '../../../utils/dirs.js'

export class CmdScriptList extends CmdScriptListData {

	/**
	 * Get avalaible scripts Names.
	 *
	 * @type {Array}
	 * @public
	 */
	scriptNames = this.getScriptListNames( )
	defaultScriptNames = this.getScriptListNames( 'default' )
	pkgScriptNames = this.getScriptListNames( 'pkg' )
	
	getScriptListNames( type = '' ) {

		let list 

		list = this.#setScriptsList( type )
		
		return Object.keys( list )
   
	}

	/**
	 * Get script data by name.
	 *
	 * @param   {string}         name - Key of the list you want to return.
	 * @param   {string}         type - type of the list you want to return. 
	 *                                If 'pkg' get package list.
	 *                                If 'default' get default list.
	 *                                If 'user' get user list.
	 *                                If empty get mixed user and default lists.
	 * @returns {object|boolean}      - Object of values. If does not exist return false.
	 */
	getScriptDataByName( name, type = '' ) {

		let res, list

		res  = false
		list = this.#setScriptsList( type )

		Object.keys( list ).forEach( val => {
 
			if ( val === name ) res = list[val]

		} )

		return res
   
	}

	/**
	 * UpdateDefaults.
	 *
	 * @todo
	 * @returns {false} - Returns false.
	 */
	updateDefaults(){

		// let names, pkgNames, res 

		// pkgNames = this.pkgScriptNames
		// names    = this.defaultScriptNames
		// res      = {}

		// names.forEach( name => {

		// 	res[name] = this.getScriptDataByName( name, 'default' )['data']['version']

		// } )

		// pkgNames.forEach( name => {

		// 	res[name] = this.getScriptDataByName( name, 'default' )['data']['version']

		// } )

		return false
	
	}

	/**
	 * Get script list values.
	 *
	 * @param   {string} type - type of the list you want to return. 
	 *                        If 'pkg' get package list.
	 *                        If 'default' get default list.
	 *                        If 'user' get user list.
	 *                        If empty get mixed user and default lists.
	 * @returns {Array}       - Array of values.
	 */
	#setScriptsList( type = '' ) {

		this.scriptsFolder()

		// this.updateDefaults()

		return this.getScriptListData( type )
		
	}

}
