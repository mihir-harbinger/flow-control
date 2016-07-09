import { combineReducers } from 'redux'
import {types} from '../constants'

const initialState = {
	isFetching: false,
	isPumping: true,
	maxHeight: {
		overhead: 0,
		basement: 0
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

const maxHeight = (state=initialState.maxHeight, action) => {
	switch(action.type){
		case types.MAX_HEIGHT_SUCCESS:
			const { overhead, basement } = action.payload
			return {
				overhead,
				basement
			}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	isFetching,
	isPumping,
	maxHeight
})

export default rootReducer