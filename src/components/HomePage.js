import React, { useState } from 'react';
import { connect } from 'react-redux';
import Question from './Question/Question';

const tabs = ['UNANSWERED','ANSWERED']
function HomePage(props) {

    const { answeredQuestionIds, loading, unansweredQuestionIds } = props
    let questionIds = [];

    const [activeTab, setActiveTab] = useState(tabs[0]);

    if (activeTab === tabs[0])
        questionIds = unansweredQuestionIds;
    else
        questionIds = answeredQuestionIds;

    if (loading) return null;
    return (
        <div className = 'border m-10 rounded border-secondary'>
            <ul className="nav nav-tabs nav-justified" role="tablist">
                {tabs.map(tab => (
                    <li key={tab} className="nav-item">
                        <button onClick={() => setActiveTab(tab)}
                            className={"nav-link text-capitalize " + (activeTab === tab ? 'bg-light text-success' : 'bg-secondary text-white')} >
                            {`${tab.toLocaleLowerCase()} Questions(${tab === tabs[0] ? answeredQuestionIds.length : unansweredQuestionIds.length })`}
                        </button>
                    </li>
                ))}
            </ul>
            <ul className='m-0 p-0'>
                {questionIds.length === 0 ? <h5 className='text-danger text-center m-5'>No Questions Found!</h5> : questionIds.map(id => (
                    <li key={id}>
                        <Question id={id}></Question>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}


function mapStateToProps({ authedUser, users, loadingBar, questions }) {
    return {
        loading: loadingBar.default === 1,
        answeredQuestionIds: Object.keys(questions)
            .filter(question => Object.keys(users[authedUser].answers).includes(question))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        unansweredQuestionIds: Object.keys(questions)
            .filter(question => !Object.keys(users[authedUser].answers).includes(question))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    }
}
export default connect(mapStateToProps)(HomePage);