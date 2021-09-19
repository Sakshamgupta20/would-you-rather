import React from 'react';
import { connect } from 'react-redux';
import { AiFillTrophy } from 'react-icons/ai'

function LeaderboardUser(props) {

    const { user, position } = props
    return (
        <div className='container position-relative w-90 bg-floralwhite m-4 p-3 border rounded shadow'>
            <div className='row mb-2'>
                <div className='col-md-3 col-sm-4 border-right-grey text-center'>
                    <img className='img-thumbnail img-user rounded-circle' src={user.avatarURL} alt="avatar" />
                </div>

                <div className='col-md-6 col-sm-8 border-right-grey'>
                    <h4 className='text-center'>{user.name}</h4>
                    <p className='mt-3'>Answered Questions <span className='float-right'> {Object.keys(user.answers).length} </span></p>
                    <hr />
                    <p>Created Questions <span className='float-right'> {user.questions.length} </span></p>
                </div>

                <div className='col-md-3 col-sm-12'>
                    <div className='border h-100 rounded border-secondary'>
                        <div className='container p-0'>
                            <h5 className='p-2 mb-0 bg-light-grey border-bottom border-secondary text-center rounded-top'>
                                Score
                            </h5>
                        </div>
                        <div className='user-score'>{Object.keys(user.answers).length + user.questions.length}</div>
                    </div>
                </div>


            </div>

            {position < 4 &&
                (<div className='user-rank'>
                    <span >
                        <AiFillTrophy style={{ color: position === 1 ? "gold" : position === 2 ? "#757575" : "brown" }}></AiFillTrophy>
                    </span>
                </div>)
            }
        </div>
    );
}

function mapStateToProps({ users }, { userId }) {
    return {
        user: users[userId]
    }
}
export default connect(mapStateToProps)(LeaderboardUser);