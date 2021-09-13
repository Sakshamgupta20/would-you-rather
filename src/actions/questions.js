import { hideLoading, showLoading } from "react-redux-loading"
import { saveQuestionAnswer } from '../utils/api'
import { setError } from "./error"
import { addUserResponse } from "./users"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function addQuestionAnswer(info) {
    return {
        type: ADD_QUESTION_ANSWER,
        ...info,
    }
}

export function handleAddQuestionAnswer(authedUser,qid,answer) {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(setError(null))

        return saveQuestionAnswer({
            authedUser,
            qid,
            answer
        })
            .then(() => {
                dispatch(addQuestionAnswer({
                    authedUser,
                    id:qid,
                    answer
                }))
                dispatch(addUserResponse({
                    id:authedUser,
                    qid,
                    answer
                }))
            })
            .catch((err) => {
                console.error(err);
                dispatch(setError(err))
            })
            .then(() => dispatch(hideLoading()))
    }
}

