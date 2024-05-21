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
                console.error('No technologies to fetch:', error);
            }
        };

        fetchTechnologies();
    }, [job.jobTechnologies]);
    function renderTechnologies() {
        if(technologies && technologies.length > 0){
            return (
                <ul>
                    {technologies.map((tech) => (
                        <Link to={`/tech/${tech._id}`} key={tech._id}>
                            <li>{tech.name}</li>
                        </Link>
                    ))}
                </ul>
            );
        }
        else{
            return (
                <div>
                    there are no added techs for this job
                </div>
            )
        }
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
        <main className='bg-gray-800'>
            <div className='text-green-600'>
                <div> {job.jobName} </div>
                <div> {job.jobTitle} </div>
                <div> {job.payPerYear} </div>
            </div>
            <p>==================</p>
            <div className='text-red-600'> 
                {job.status} 
            </div>
            <p>==================</p>
            <div className='text-blue-600'>
                techs below:
                {renderTechnologies()}
            </div>
            <p>==================</p>
                <div className='text-purple-600'> 
                    {job.jobDescription} 
                </div>
                <p>==================</p>
            {job.jobLocation.address && (
                <>
                <div className='text-orange-600'>
                    <div>Location:</div>
                    <div>{job.jobLocation.address}</div>
                    <div>{job.jobLocation.city}, {job.jobLocation.state}, {job.jobLocation.zip}</div>
                </div>
                </>
            )}
                <div className='text-yellow-600'>Links:
                <div>{job.companySiteLink}</div>
                <div>{job.companyApplicationSiteLink}</div>
                <div>{job.recruitingPlatform}</div>
                </div>
            <p>==================</p>
                Contacts:
                <div className='text-pink-600'>
                <div>{job.contactInfoCompany.name}</div>
                <div>{job.contactInfoCompany.email}</div>
                <div>{job.contactInfoCompany.phone}</div>
                </div>
                <div className='text-indigo-600'>
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
        </main>
        </>
    )
}