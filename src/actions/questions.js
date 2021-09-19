import { hideLoading, showLoading } from "react-redux-loading"
import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { setError } from "./error"
import history from '../components/History'

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

export function addQuestionAnswer(answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        answer,
    }
}

export function handleAddQuestion(author, optionOneText, optionTwoText) {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(setError(null))

        return saveQuestion({
            author,
            optionOneText,
            optionTwoText
        })
            .then((response) => {
                dispatch(addQuestion(response))
                history.push('/')
            })
            .catch((err) => {
                console.error(err);
                dispatch(setError(err))
            })
            .then(() => dispatch(hideLoading()))
    }
}

export function handleAddQuestionAnswer(authedUser, qid, answer) {
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
                    qid,
                    option:answer
                }))
            })
            .catch((err) => {
                console.error(err);
                dispatch(setError(err))
            })
            .then(() => dispatch(hideLoading()))
    }
}

