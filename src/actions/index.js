var Parse = require('parse/react-native').Parse;
import { types } from '../constants'

export const startPumping = () => {
	return {
		type: types.START_PUMPING
	}
}

export const stopPumping = () => {
	return {
		type: types.STOP_PUMPING
	}
}

const maxHeightRequest = () => {
	return {
		type: types.MAX_HEIGHT_REQUEST
	}
}

const maxHeightSuccess = payload => {
	return {
		type: types.MAX_HEIGHT_SUCCESS,
		payload
	}
}

const maxHeightFailure = () => {
	return {
		type: types.MAX_HEIGHT_FAILURE
	}
}

export const fetchMaxHeight = () => {
	return dispatch => {
		dispatch(maxHeightRequest())
		Parse.Cloud.run('getMaxHeight', {}).then(
			function(result){
				const obj = Object.assign({}, result.reduce((acc, tank) => {
					acc[tank.toJSON().tank_name] = tank.toJSON().height
					return acc
				}, {}))
				dispatch(maxHeightSuccess(obj))
				// console.warn("[ACTION API] Result: " + JSON.stringify(result, null, 2))
			},
			function(error){
				dispatch(maxHeightFailure())
				// console.warn("[ACTION API] Error: " + JSON.stringify(error, null, 2))
			}
		)
	}
}