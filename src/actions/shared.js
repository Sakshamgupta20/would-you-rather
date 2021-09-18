import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from './questions'
import { setError } from './error'
import { showLoading,hideLoading } from 'react-redux-loading'
import { setAuthedUser } from './authedUser'

export const RESET_STATE = ' RESET_STATE'

export function resetState() {
    return {
        type: RESET_STATE
    }
}

export function handleInitialData(authedUser) {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(setError(null))
                dispatch(setAuthedUser(authedUser))
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}