import { SET_AUTHED_USER } from "../actions/authedUser";
import { RESET_STATE } from "../actions/shared";

export default function authedUser(state = null,action) {
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.authedUser
        case RESET_STATE:
            return null
        default:
            return state
    }
}