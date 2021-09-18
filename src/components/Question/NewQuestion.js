import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../../actions/questions';

function NewQuestion(props) {

    const {authedUser,loading,dispatch,error} = props;

    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(handleAddQuestion(authedUser,optionOne,optionTwo))
    }
    return (
        <div className='container bg-floralwhite shadow border border-secondary p-0 rounded w-90'>
            <h5 className='p-2 bg-light-grey border-bottom border-secondary text-center rounded-top'>
                Create New Question
            </h5>
            <div className='container w-90 mx-auto'>
                <p>Complete the question:</p>

                <p><strong>Would you rather... </strong></p>

                <form onSubmit = {handleSubmit}>
                    <input value={optionOne} onChange={(event) => setOptionOne(event.target.value)}
                        type="text" className="form-control" placeholder="Type Option one here" required />

                    <p className='m-2 text-center'><strong>OR</strong></p>

                    <input value={optionTwo} onChange={(event) => setOptionTwo(event.target.value)}
                        type="text" className="form-control" placeholder="Type Option two here" required />

                    <button disabled={!optionOne || !optionTwo || loading} type='submit' className='btn mt-3 btn-success w-100'>Submit</button>
                    {error !== null && <div className="text-danger">{error}</div>}
                </form>
            </div>
        </div>
    );
}

function mapStateToProps({ authedUser, loadingBar,error }) {

    return {
        authedUser,
        loading: loadingBar.default === 1,
        error
    }
}

export default connect(mapStateToProps)(NewQuestion);