import { useState } from 'react';

export default function JobItemDetail({job, handleDelete, setJob}){


    return(
        <>
            <p>================================</p>
            <div> {job.jobName} ||| {job._id} </div>
            <p>================================</p>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}