import React from 'react';
import Job from './Job'
import '../App.css'

const Jobs = ({jobs}) => {
    return (
        <div className="jobs"> Jobs Listed: {jobs.length}
        {
            jobs ? 
            (
                jobs.map( (job, i) => (<Job key={i} job={job} />))
            ):null
        }
            
        </div>
    );
}

export default Jobs;
