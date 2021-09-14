import { ADD_QUESTION, ADD_QUESTION_ANSWER, RECEIVE_QUESTIONS } from "../actions/questions"

export default function questions(state = [],action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION_ANSWER:
            const { answer } = action
            return {
                ...state,
                [answer.id]: {
                    ...state[answer.id],
                    [answer.option]: {
                        ...state[answer.id][answer.option],
                        votes: state[answer.id][answer.option].votes.concat([answer.authedUser])
                    }
                }
            }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        default:
            return state
    }
}