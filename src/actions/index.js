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

const overheadDimensionsRequest = () => {
	return {
		type: types.OVERHEAD_DIMENSIONS_REQUEST
	}
}

const overheadDimensionsSuccess = payload => {
	//console.warn("overhead", JSON.stringify(payload, null, 2))
	return {
		type: types.OVERHEAD_DIMENSIONS_SUCCESS,
		payload
	}
}

const overheadDimensionsFailure = () => {
	return {
		type: types.OVERHEAD_DIMENSIONS_FAILURE
	}
}

const basementDimensionsRequest = () => {
	return {
		type: types.BASEMENT_DIMENSIONS_REQUEST
	}
}

const basementDimensionsSuccess = payload => {
	//console.warn("basement", JSON.stringify(payload, null, 2))
	return {
		type: types.BASEMENT_DIMENSIONS_SUCCESS,
		payload
	}
}

const basementDimensionsFailure = () => {
	return {
		type: types.BASEMENT_DIMENSIONS_FAILURE
	}
}

export const fetchDimensions = () => {
	return dispatch => {
		dispatch(overheadDimensionsRequest())
		dispatch(basementDimensionsRequest())
		Parse.Cloud.run('getMaxHeight', {}).then(
			function(result){
				const obj = Object.assign({}, result.reduce((acc, tank) => {
					if(tank.toJSON().tank_name === "overhead"){
						dispatch(overheadDimensionsSuccess({
							height: tank.toJSON().height,
							width: tank.toJSON().width,
							length: tank.toJSON().length	
						}))
					}
					if(tank.toJSON().tank_name === "basement"){
						dispatch(basementDimensionsSuccess({
							height: tank.toJSON().height,
							width: tank.toJSON().width,
							length: tank.toJSON().length	
						}))
					}					
					return acc
				}, {}))
				// console.warn("[ACTION API] Result: " + JSON.stringify(result, null, 2))
			},
			function(error){
				dispatch(overheadFailure())
				dispatch(basementFailure())
				// console.warn("[ACTION API] Error: " + JSON.stringify(error, null, 2))
			}
		)		
	}
}