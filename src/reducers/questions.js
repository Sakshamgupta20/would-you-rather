import { ADD_QUESTION, ADD_QUESTION_ANSWER, RECEIVE_QUESTIONS } from "../actions/questions"
import { RESET_STATE } from "../actions/shared"

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION_ANSWER:
            const { answer } = action
            return {
                ...state,
                [answer.qid]: {
                    ...state[answer.qid],
                    [answer.option]: {
                        ...state[answer.qid][answer.option],
                        votes: state[answer.qid][answer.option].votes.concat([answer.authedUser])
                    }
                }
            }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        case RESET_STATE:
            return {}
        default:
            return state
    }
}