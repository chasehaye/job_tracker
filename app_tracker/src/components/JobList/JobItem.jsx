import { Link } from "react-router-dom";

export default function JobItem({job}){
    return (
        <>
            <div>
                <Link to={`/jobs/${job._id}`}>
                    <div>|| {job.jobName} || {job.jobTitle} || {job.payPerYear} || {job.status} || </div><p>link toggle</p> <p>contact toggle</p>
                </Link>
            </div>
        </>
    )
}