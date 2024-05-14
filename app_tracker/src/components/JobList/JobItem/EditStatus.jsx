import { useState } from 'react';
import { updateJobRequest } from '../../../../utilities/jobs-api';

export default function EditStatus({job}){

    const [error, setError] = useState('');
    const [showStatusForm, setshowStatusForm] = useState(false);
    const [status, setStatus] = useState(job.status);

    const toggle = () => {
        setshowStatusForm((prev) => !prev);
    };

    async function handleSubmit(e){
        e.preventDefault();
        const updatedStatus = {
            status: status
        };
        try{
            const modifiedStatus = await updateJobRequest(job._id, updatedStatus)
            setError('');
            window.location.reload();
        }catch(err){
            setError("Bad update try again")
        }
    }
  return (
    <>
        <button onClick={toggle}>toggle form</button>

        {showStatusForm && (
        <form onSubmit={handleSubmit}>
            <label htmlFor="status">Status:</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="Pending">Pending</option>
                <option value="Interviewing">Interviewing</option>
                <option value="Offered">Offered</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>
            </select>
            <button>Submit Change</button>
        </form>
        )}
        { error && <p>{JSON.stringify(error)}</p>}

    </>
  )
}
