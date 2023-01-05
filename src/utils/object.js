/**
 * Functions for objects.
 *
 * @description Functions for object.
 *
 */

export const isObject = ( arg ) => {

	if (
		typeof arg === 'object' &&
		!Array.isArray( arg ) &&
		arg !== null
	) {

		return true

	}

	return false

}
