import { Link } from "react-router-dom";

export default function JobItem({job}){
    return (
        <>
            <p>
                <Link to={`/jobs/${job._id}`}>
                    || {job.jobName} |
                    | {job._id} ||
                </Link>
            </p>
        </>
    )
}