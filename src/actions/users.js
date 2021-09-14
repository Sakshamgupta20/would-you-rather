import { addUser } from "../utils/api"
import { setError } from "./error"
import { showLoading, hideLoading } from 'react-redux-loading'
import history from '../components/History'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const CREATE_NEW_USER = 'CREATE_NEW_USER'
export const ADD_USER_RESPONSE = 'ADD_USER_RESPONSE'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function addUserResponse(answer) {
    return {
        type: ADD_USER_RESPONSE,
        answer,
    }
}

export function addUserQuestion(question) {
    return {
        type: ADD_USER_QUESTION,
        question,
    }
}

export function handleNewUser(username, name, password, avatarURL) {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(setError(null))

        return addUser({
            username,
            name,
            password,
            avatarURL
        })
            .then(() => history.push('/'))
            .catch((err) => {
                console.error(err);
                dispatch(setError(err))
            })
            .then(() => dispatch(hideLoading()))
    }
}