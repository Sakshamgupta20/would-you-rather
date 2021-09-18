import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleUserAuthentication } from '../../actions/authedUser';
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link,Redirect } from 'react-router-dom';
function Login(props) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { error, dispatch, loading,authedUser } = props

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleUserAuthentication(userName, password))
    }

    if(authedUser) {
        return (<Redirect to = '/'></Redirect>)
    }
    return (
        <div className='d-flex vh-100 align-items-center justify-content-center'>
            <div className='login-container shadow-lg'>
                <h3 className='mt-5 mb-5 mb-4 text-center font-weight-bold'>Login</h3>
                <form onSubmit={handleSubmit} className='center'>
                    <div className='form-group'>
                        <label htmlFor="userName">Username</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="usernameIcon"><div><AiOutlineUser id="usernameIcon" /></div></span>
                            </div>
                            <input value={userName} onChange={(event) => setUserName(event.target.value.replaceAll(/\s/g, ''))}
                                type="text" className="form-control" id="userName" aria-describedby="usernameIcon" placeholder="Type your username" />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="passwordIcon"><div><RiLockPasswordLine /></div></span>
                            </div>
                            <input value={password} onChange={(event) => setPassword(event.target.value.replaceAll(/\s/g, ''))}
                                type="password" className="form-control" id="password" placeholder="Type your password" aria-describedby="passwordIcon" />
                        </div>
                    </div>

                    {error !== null && <div className="text-danger">{error}</div>}
                    <div className="container mt-5">
                        <div className="col-md-12 text-center">
                            <button disabled={loading || !userName || !password} type="submit" className="btn btn-success w-75 rounded-pill">Login</button>
                        </div>
                    </div>

                    <h6 className='text-center mt-5'>
                        <Link className = 'text-primary text-decoration-none' to='/signUp'>SIGN UP</Link>
                    </h6>
                </form>
            </div>
        </div>
    );
}

function mapStateToProps({ error, loadingBar,authedUser }) {
    return {
        error,
        loading: loadingBar.default === 1,
        authedUser
    }
}

export default connect(mapStateToProps)(Login);