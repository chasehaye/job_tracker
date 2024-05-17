import { useState, useEffect } from 'react';
import { getTechListForJob } from '../../../utilities/technologies-api';
import { Link } from "react-router-dom";

export default function JobItemDetail({job, handleDelete, setJob}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    const [technologies, setTechnologies] = useState([]);



    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const response = await getTechListForJob(job.jobTechnologies);
                setTechnologies(response); // Assuming response contains the fetched technologies
            } catch (error) {
                console.error('Error fetching technologies:', error);
            }
        };

        fetchTechnologies();
    }, [job.jobTechnologies]);
    function renderTechnologies() {
        return (
            <ul>
                {technologies.map((tech) => (
                    <Link to={`/tech/${tech._id}`}>
                        <li key={tech._id}>{tech.name}</li>
                    </Link>
                ))}
            </ul>
        );
    }



    function toggleEditForm(){
        setEditFormIsOpen((previousState) => {
            return !previousState;
        })
    }
    function renderFavoriteStatus() {
        return job.favorite ? <div>Favorite</div> : <div>Not Favorite</div>;
    }
    return(
        <>
            <p>==================</p>
                <div> {job.jobName} </div>
                <div> {job.jobTitle} </div>
                <div> {job.payPerYear} </div>
            <p>==================</p>
                <div> {job.status} </div>
            <p>==================</p>
            <div>techs below:</div>
            {renderTechnologies()}
            <p>==================</p>
                <div> {job.jobDescription} </div>
            <p>==================</p>
            {job.jobLocation.address && (
                <>
                    <div>Location:</div>
                    <div>{job.jobLocation.address}</div>
                    <div>{job.jobLocation.city}, {job.jobLocation.state}, {job.jobLocation.zip}</div>
                    <p>==================</p>
                </>
            )}
                <div>Links:</div>
                <div>{job.companySiteLink}</div>
                <div>{job.companyApplicationSiteLink}</div>
                <div>{job.recruitingPlatform}</div>
            <p>==================</p>
                <div>Contacts:</div>
                <div>
                <div>{job.contactInfoCompany.name}</div>
                <div>{job.contactInfoCompany.email}</div>
                <div>{job.contactInfoCompany.phone}</div>
                </div>
                <div>
                <div>{job.contactInfoHiringManager.name}</div>
                <div>{job.contactInfoHiringManager.email}</div>
                <div>{job.contactInfoHiringManager.phone}</div>
                </div>
            <p>==================</p>
                {renderFavoriteStatus()}
            <p>==================</p>
            <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditJobItemForm job={job} setJob={setJob} setEditFormIsOpen={setEditFormIsOpen}></EditJobItemForm>
                }
            <p>==================</p>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}