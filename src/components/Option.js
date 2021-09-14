import React from 'react';

function Option(props) {
    const { option, selected, totalVotes } = props;

    const totalPercent = Math.round(((option.votes.length / totalVotes) * 100) * 100) / 100;

    return (
        <div className={"option-container border border-dark rounded " + (selected ? 'bg-lime' : '')}>
            <strong className={"mb-3 d-block " + (selected ? 'text-success' : 'text-dark')}>{`Would you rather ${option.text} ?`}</strong>
            <div className = 'text-center'>
                <div className="progress">
                    <div className="progress-bar bg-success" style={{width: totalPercent + '%'}} role="progressbar" aria-valuemin="0" aria-valuemax="100">
                        <strong className = 'progress-bar-text'>{totalPercent}%</strong>
                    </div>
                </div>
                <p className='mt-1'><strong>{`${option.votes.length} out of ${totalVotes} votes`}</strong></p>
            </div>
            {selected && <p className = 'answer-chip shadow'>Your Answer</p>}
        </div>
    )
}

export default Option;