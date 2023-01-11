
/**
 * Bundle config.
 *
 * @description Bundle config: esbuild.config.js.
 *
 */

import esbuild from 'esbuild'
import babel   from 'esbuild-plugin-babel'

const buildCommon = {
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
	
const buildEsm = {
	entryPoints : [ 'src/index.js' ],
	bundle      : true,
	minify      : true,
	platform    : 'node',
	outfile     : 'dist/build/bundle.js',
	format      : 'esm',
}
    
esbuild
	.build( buildCommon )
	.catch( () => process.exit( 1 ) )

esbuild
	.build( buildEsm )
	.catch( () => process.exit( 1 ) )
