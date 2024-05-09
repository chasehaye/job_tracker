import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateJobRequest } from '../../../utilities/jobs-api';

export default function EditJobItemForm({job, setJob, setEditFormIsOpen}){
    const navigate = useNavigate();
    const jobNameRef = useRef(job.jobName);
    const jobTitleRef = useRef(job.jobTitle);
    const [error, setError] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const updatedJob = {
            jobName: jobNameRef.current.value,
            jobTitle: jobTitleRef.current.value,
        }
        try{
            const newJob = await updateJobRequest(job._id, updatedJob)
            setJob(newJob)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Bad update try again")
        }
    }
    return(
        <>
        { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>
                <label htmlFor="jobName">Job Name:</label>
                <input type="text" id="jobName" ref={jobNameRef} defaultValue={job.jobName}/>
                
                <label htmlFor="jobTitle">Job Title:</label>
                <input type="text" id="jobTitle" ref={jobTitleRef} defaultValue={job.jobTitle}/>

                <button>Update</button>

            </form>
            </>
    )
}