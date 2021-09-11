import {
    _authenticateUser,
    _addUser,
    _getQuestions,
    _getUsers,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA";

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users,questions]) => ({
        users,
        questions
    }))
}

export function addUser (user) {
    return _addUser(user);
}

export function authenticateUser (user) {
    return _authenticateUser(user);
}


export function saveQuestion(question) {
    return _saveQuestion(question);
}

export function saveQuestionAnswer(info) {
    return _saveQuestionAnswer(info);
}