
/**
 * Bundle config.
 *
 * @description Bundle config: esbuild.config.js.
 *
 */

import esbuild from 'esbuild'
import babel   from 'esbuild-plugin-babel'

const build = {
	entryPoints : [ 'src/index.js' ],
	bundle      : true,
	minify      : true,
	platform    : 'node',
	outfile     : 'dist/build/bundle.cjs',
	plugins     : [
		babel(),
	],
	format : 'cjs',
}
    
esbuild
	.build( build )
	.catch( () => process.exit( 1 ) )
