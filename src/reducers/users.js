import {  ADD_USER_RESPONSE, RECEIVE_USERS } from "../actions/users";

export default function users(state = [],action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_RESPONSE:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    answers: {
                        ...state[action.id].answers,
                        [action.qid]: action.answer
                    }
                    
                }
            }
        default:
            return state
    }
}