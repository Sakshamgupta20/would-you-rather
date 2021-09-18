import { SET_ERROR } from '../actions/error'
import { RESET_STATE } from '../actions/shared'

export default function error(state = [],action) {
    switch(action.type) {
        case SET_ERROR:
            return action.error
        case RESET_STATE:
            return null
        default:
            return state
    }
}