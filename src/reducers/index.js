import { combineReducers } from 'redux'
import {types} from '../constants'

const initialState = {
	isPumping: true
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

const rootReducer = combineReducers({
	isPumping
})

export default rootReducer