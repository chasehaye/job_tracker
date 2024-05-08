import { useParams, useNavigate } from "react-router-dom";
import { deleteJobRequest, getJobRequest } from "../utilities/jobs-api";
import { useEffect, useState } from "react";
import JobItemDetail from "./components/JobItemDetail/JobItemDetail";


export default function JobDetailPage(){
    let { jobId } = useParams();
    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchJob() {
            try {
                const jobData = await getJobRequest(jobId);
                if (jobData) {
                    setJob(jobData);
                    setLoading(false);
                } else {
                    setError("No job found");
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error:", error);
                setError("Error retreving job redirect");
                setLoading(false);
            }
        }
        if (jobId) {
            fetchJob();
        }
    }, [jobId]);

    async function handleDelete(e){
        const deleteResponse = await deleteJobRequest(job._id);
        if(deleteResponse.data === 'success'){
            navigate('/jobs')
        }
    }

    return(
        <>
        {loading ? 
            <p>Loading</p>
        :
        error ? 
            <p>{error}</p>
        :
        <JobItemDetail job={job} handleDelete={handleDelete} setJob={setJob}/>
        }
        </>
    )

}