import { ADD_QUESTION, ADD_QUESTION_ANSWER } from "../actions/questions";
import { RESET_STATE } from "../actions/shared";
import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_ANSWER:
            const { answer } = action
            return {
                ...state,
                [answer.authedUser]: {
                    ...state[answer.authedUser],
                    answers: {
                        ...state[answer.authedUser].answers,
                        [answer.qid]: answer.option
                    }

                }
            }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat(question)
                }
            }
        case RESET_STATE:
            return {}
        default:
            return state
    }
}