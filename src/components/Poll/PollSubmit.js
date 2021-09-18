import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../../actions/questions'

function PollSubmit(props) {

    const { question, authedUser, dispatch,loading } = props;
    const [answer, setAnswer] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleAddQuestionAnswer(authedUser,question.id,answer))
    }

    return (
        <form onSubmit={handleSubmit} >
            <h5>Would you rather</h5>
            <div onChange={(e) => setAnswer(e.target.value)}>
                <div className="form-check">
                    <input className="form-check-input" value='optionOne' type="radio" name="options" id="option1" />
                    <label className="form-check-label" htmlFor="option11">
                        {question.optionOne['text']}
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" value='optionTwo' type="radio" name="options" id="option2" />
                    <label className="form-check-label" htmlFor="option2">
                        {question.optionTwo['text']}
                    </label>
                </div>
            </div>
            <button disabled={!answer || loading} type='submit' className='btn mt-3 btn-success w-75'>Submit</button>
        </form>
    );
}

function mapStateToProps({ authedUser, users, questions,loadingBar }, props) {
    const { id } = props
    const question = questions[id]
    return {
        question,
        author: users[question.author],
        authedUser,
        loading: loadingBar.default === 1
    }
}


export default connect(mapStateToProps)(PollSubmit);