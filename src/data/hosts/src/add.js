/**
 * Class for cmd [add].
 *
 * @description Class for cmd [add].
 *
 */

import { Cmd } from './_super.js' 

export class Add extends Cmd {

	run(){

		console.log( 'add', this.args )
	
	}
    
}
