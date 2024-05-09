import { Link } from "react-router-dom";

export default function JobItem({job}){
    return (
        <>
            <p>
                <Link to={`/jobs/${job._id}`}>
                    || {job.jobName} || {job.jobTitle} || {job.payPerYear} || {job.status} || <p>link toggle</p> <p>contact toggle</p>
                </Link>
            </p>
        </>
    )
}