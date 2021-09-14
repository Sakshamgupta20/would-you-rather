import {  ADD_USER_QUESTION, ADD_USER_RESPONSE, RECEIVE_USERS } from "../actions/users";

export default function users(state = [],action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_USER_RESPONSE:
            const {answer}  = action
            return {
                ...state,
                [answer.id]: {
                    ...state[answer.id],
                    answers: {
                        ...state[answer.id].answers,
                        [answer.qid]: answer.option
                    }
                    
                }
            }
        case ADD_USER_QUESTION: 
            const {question}  = action
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat(question)
                }
            }
        default:
            return state
    }
}