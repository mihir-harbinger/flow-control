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