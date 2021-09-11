import { showLoading,hideLoading } from 'react-redux-loading'
import { authenticateUser } from "../utils/api"
import { setError } from "./error"
import { handleInitialData } from './shared'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser(authedUser) {
    return {
        type: SET_AUTHED_USER,
        authedUser
    }
}

export function handleUserAuthentication(userName, password) {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(setError(null))

        return authenticateUser({
            userName,
            password
        })
            .then((authedUser) => {
                dispatch(handleInitialData(authedUser))
            })
            .catch((err) => {
                console.error(err);
                dispatch(setError(err))
            })
            .then(() => dispatch(hideLoading()))
    }
}