import { ADD_QUESTION_ANSWER, RECEIVE_QUESTIONS } from "../actions/questions"

export default function questions(state = [],action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION_ANSWER:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.answer]: {
                        ...state[action.id][action.answer],
                        votes: state[action.id][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }
}