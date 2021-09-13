import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { AiOutlineUserAdd } from 'react-icons/ai';
import { handleNewUser } from '../actions/users';
import { FiLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}
function SignUp(props) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [avatarURL, setAvatarUrl] = useState({ value: '', error: false });
    const { error, dispatch, loading,authedUser } = props

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleNewUser(userName, name, password, avatarURL.value))
    }

    const handleAvatarUrl = (e) => {
        let url = e.target.value.replaceAll(/\s/g, '');
        setAvatarUrl({ value: url, error: !validURL(url) })
    }
    
    if(authedUser) {
        return (<Redirect to = '/'></Redirect>)
    }

    return (
        <div className='d-flex vh-100 align-items-center justify-content-center'>
            <div className='login-container shadow-lg'>
                <h3 className='mt-5 mb-5 mb-4 text-center font-weight-bold'>SignUp</h3>
                <form onSubmit={handleSubmit} className='center'>
                    <div className='form-group'>
                        <label htmlFor="userName">Username</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="usernameIcon"><div><AiOutlineUser id="usernameIcon" /></div></span>
                            </div>
                            <input value={userName} onChange={(event) => setUserName(event.target.value.replaceAll(/\s/g, ''))}
                                type="text" className="form-control" id="userName" aria-describedby="usernameIcon" required placeholder="Type your username" />
                        </div>
                    </div>

                    <div className='form-group mt-3'>
                        <label htmlFor="name">Name</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="nameIcon"><div><AiOutlineUserAdd /></div></span>
                            </div>
                            <input value={name} onChange={(event) => setName(event.target.value)}
                                type="text" className="form-control" id="name" placeholder="Type your name" required aria-describedby="nameIcon" />
                        </div>
                    </div>

                    <div className='form-group mt-3'>
                        <label htmlFor="avararUrl">Avarar Url</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="avararIcon"><div>{avatarURL.value && !avatarURL.error ? <img alt = 'avatar' width={25} src={avatarURL.value} /> : <FiLink />}</div></span>
                            </div>
                            <input value={avatarURL.value} onChange={handleAvatarUrl}
                                type="text" className={"form-control " + (avatarURL.error ? 'is-invalid' : '')} id="avatarURL" placeholder="Enter avatar url" aria-describedby="avatarIcon" />
                            <div id="avatarURL" className="invalid-feedback">
                                Please provide valid url
                            </div>
                        </div>

                    </div>

                    <div className='form-group mt-3'>
                        <label htmlFor="password">Password</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="passwordIcon"><div><RiLockPasswordLine /></div></span>
                            </div>
                            <input value={password} onChange={(event) => setPassword(event.target.value.replaceAll(/\s/g, ''))}
                                type="password" className="form-control" id="password" placeholder="Type your password" required aria-describedby="passwordIcon" />
                        </div>
                    </div>

                    <div className="container mt-5">
                        <div className="col-md-12 text-center">
                            <button disabled={loading || !userName || !password || !avatarURL.value || avatarURL.error || !name} type="submit" className="btn btn-success w-75 rounded-pill">Sign Up</button>
                            {error !== null && <div className="text-danger">{error}</div>}
                        </div>
                    </div>

                    <h6 className='text-center mt-5'>
                        <Link className = 'text-primary text-decoration-none' to='/'>LOG IN</Link>
                    </h6>

                </form>
            </div>
        </div>
    );
}

function mapStateToProps({ authedUser,error, loadingBar }) {
    return {
        authedUser,
        error,
        loading: loadingBar.default === 1
    }
}

export default connect(mapStateToProps)(SignUp);