import { useRef, useState } from 'react';
import { createNewJob } from '../../utilities/jobs-api';
import { useNavigate, useParams } from "react-router-dom";


const NewJobForm = () => {
    const navigate = useNavigate();
    const jobNameRef = useRef('');
    const jobTitleRef = useRef('');
    const [ error, setError ] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        const newJob = {
            jobName: jobNameRef.current.value,
            jobTitle: jobTitleRef.current.value
        }
        try {
            const newJobResponse = await createNewJob(newJob);
            navigate('/');
        }catch(err) {
            setError(err);
        }
    }

  return (
    <>
    <h1>form:</h1>
    <form onSubmit={handleSubmit}>

        <label htmlFor='jobName'>Job:</label>
        <input type='text' id='jobName' ref={jobNameRef}/>

        <label htmlFor='jobName'>Job:</label>
        <input type='text' id='jobName' ref={jobTitleRef}/>

        <button>Add job</button>
    </form>

    </>
  )
}

export default NewJobForm