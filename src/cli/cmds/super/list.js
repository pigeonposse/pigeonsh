
/**
 * Class [list] for extend cmds.
 *
 * @description Class [list] for extend cmds.
 *
 */

import { CmdInit }       from './init.js'
import { getDirs }       from '../../../utils/dirs.js'
import { fileExists }    from '../../../utils/files.js'
import { getObjectFile } from '../../../utils/getObjectFile.js' 

export class CmdList extends CmdInit {

	getInfoScriptData( path, name ){
        
		let res, paths, defaultData
        
		paths = [
			path + '/info.yml',
			path + '/info.yaml',
			path + '/info.json',
		]

		defaultData = {
			id      : name,
			version : '1.0.0',
			path    : path,
		}

		res        = {}
		res.exists = false
		res.data   = defaultData

		paths.forEach( val => {

			if ( fileExists( val ) ) {

				res = {
					exists : true,
					path   : val,
					data   : {
						...defaultData,
						...getObjectFile( val ),
					},
				}
            
			}

		} )

		return res
    
	}
    
	getListData( type, path, name ){

		let types, res
        
		res   = false
		types = [
			{
				cli : 'source',
				ext : '.sh',
			},
			{
				cli : 'node',
				ext : '.js',
			},
			{
				cli : 'python',
				ext : '.py',
			}, 
		]

		types.forEach( val => {

			let file = path + '/main' + val.ext
            
			if ( fileExists( file ) ) {

				res = {
					cli      : val.cli,
					path     : path,
					mainPath : file,
					name     : name,
					type     : type,
					info     : this.getInfoScriptData( path, name ),
				}
            
			}

		} )

		return res
	
	}

	getList( path, type = 'defaults' ){

		let dirName, dirs, scriptsPath, res, data

		dirs = getDirs( path )
		res  = []
        
		for( dirName of dirs ) {

			scriptsPath = path + '/' + dirName

			data = this.getListData( 
				type, 
				scriptsPath, 
				dirName,
			)

			if ( data ) res.push( data )

		}

		return res
        
	} 

	getScriptsListKey( type ) {

		let list = this.getScriptsList()
		
		return list.map( value => { 

			if ( value[type] ) return value[type]

		} )
   
	}

	getDefaultScriptsList() {

		return this.getList( this.defaultScriptsPath )
    
	} 

	getUserScriptsList() {

		let list, index

		list  = this.getList( this.scriptsPath, 'user' )
		index = list.indexOf( 'defaults' )

		if ( index !== -1 ) {

			list.splice( index, 1 )
        
		}
        
		return list
    
	} 

	getScriptsList( type = '' ) {

		let defaults, user

		this.scriptsFolder()
        
		user     = this.getUserScriptsList()
		defaults = this.getDefaultScriptsList()
        
		if ( type == 'user' ) return user
		if ( type == 'defaults' ) return defaults

		return defaults.concat( user )
		
	}

	getScript( name ) {

		let res, list

		list = this.getScriptsList()

		list.forEach( ( val ) => {
 
			if ( val['name'] === name ) res = val

		} )

		return res
   
	}

}
