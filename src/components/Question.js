import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatDisplayQuestion } from '../utils/_DATA';


function Question(props) {
    const { id, option, author } = props;
    return (
        <div className='container bg-floralwhite shadow border border-secondary p-0 rounded w-90'>
            <h6 className='p-2 bg-light-grey border-bottom border-secondary rounded-top'>
                {author.name} asks:
            </h6>
            <div className='container m-3'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12 question-image-container text-center mb-2'>
                        <img className='img-thumbnail rounded-circle w-50' src={author.avatarURL} alt="avatar" />
                    </div>
                    <div className='col-md-8 col-sm-12'>
                        <h6>Would you rather</h6>
                        <p className='text-secondary'>...{option.text.substring(0, 20)}...</p>
                        <Link to={`questions/${id}`}>
                            <button className='btn btn-outline-primary w-75'>
                                View Poll
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps({ authedUser, users, questions }, { id }) {

    return questions[id]
        ? formatDisplayQuestion(users, questions[id], authedUser)
        : null
}

export default connect(mapStateToProps)(Question);