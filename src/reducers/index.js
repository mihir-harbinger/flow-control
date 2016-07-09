import { combineReducers } from 'redux'
import {types} from '../constants'

const initialState = {
	isFetching: false,
	isPumping: true,
	overhead: {
		width: 0,
		length: 0,
		height: 0
	},
	basement: {
		width: 0,
		length: 0,
		height: 0
	}
}

const isFetching = (state=initialState.isFetching, action) => {
	switch(action.type){
		case types.MAX_HEIGHT_REQUEST:
			return true
		case types.MAX_HEIGHT_SUCCESS:
		case types.MAX_HEIGHT_FAILURE:
			return false
		default:
			return state
	}
}

const isPumping = (state=initialState.isPumping, action) => {
	switch(action.type){
		case types.START_PUMPING:
			return true
		case types.STOP_PUMPING:
			return false
		default:
			return state
	}
}

const overhead = (state=initialState.overhead, action) => {
	switch(action.type){
		case types.OVERHEAD_DIMENSIONS_SUCCESS:
			return action.payload
		case types.OVERHEAD_DIMENSIONS_FAILURE:
		case types.OVERHEAD_DIMENSIONS_REQUEST:
			return state
		default:
			return state
	}
}

const basement = (state=initialState.basement, action) => {
	switch(action.type){
		case types.BASEMENT_DIMENSIONS_SUCCESS:
			return action.payload
		case types.BASEMENT_DIMENSIONS_FAILURE:
		case types.BASEMENT_DIMENSIONS_REQUEST:
			return state
		default:
			return state
	}
}

const rootReducer = combineReducers({
	isFetching,
	isPumping,
	overhead,
	basement
})

export default rootReducer