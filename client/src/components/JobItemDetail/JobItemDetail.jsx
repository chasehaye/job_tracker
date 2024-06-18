import { useState, useEffect } from 'react';
import { getTechListForJob } from '../../../utilities/technologies-api';
import { Link } from "react-router-dom";
import EditStatus from '../JobList/JobItem/EditStatus';
import EditJobItemForm from './EditJobItemForm';

export default function JobItemDetail({job, handleDelete, setJob}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    const [technologies, setTechnologies] = useState([]);
    const [showEditStatus, setShowEditStatus] = useState(false);

    const editStatus = () => {
        setShowEditStatus((prev) => !prev);
    };

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
                <ul className="grid grid-cols-1 gap-1 overflow-auto max-h-60 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {technologies.map((tech) => (
                        <Link to={`/tech/${tech._id}`} key={tech._id} >
                            <li className='flex flex-col items-center hover:text-C3'>|{tech.name}|</li>
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
        <main className='mt-6'>
            <div className="grid grid-cols-1 gap-4 rounded-lg bg-C4 text-C6 card-shadow pt-6 pb-6 px-8 mx-4 mb-8 lg:grid-cols-3">
                <div className='flex flex-col items-center mt-4'>
                    <div className='text-2xl'> {job.jobName} </div>
                    <div className='text-md'> {job.jobTitle} </div>
                    <div className='text-md'> ${job.payPerYear} </div>
                </div>
                <div className='m-4 ml-0 mr-6'> 
                        {job.jobDescription} 
                </div>
                <div className='mt-4'>
                    <div className='flex flex-col items-center text-center mx-auto underline text-lg mb-6'>technologies</div>
                    {renderTechnologies()}
                </div>



                <div className='flex flex-col items-center my-10'>
                    <div>Related links</div>
                    <div>{job.companySiteLink}</div>
                    <div>{job.companyApplicationSiteLink}</div>
                    <div>{job.recruitingPlatform}</div>
                </div>
                <div className='flex flex-col items-center my-10'>
                    <div>Company info</div>
                    <div>{job.contactInfoCompany.name}</div>
                    <div>{job.contactInfoCompany.email}</div>
                    <div>{job.contactInfoCompany.phone}</div>
                </div>
                <div className='flex flex-col items-center my-10'>
                    <div>Manager info</div>
                    <div>{job.contactInfoHiringManager.name}</div>
                    <div>{job.contactInfoHiringManager.email}</div>
                    <div>{job.contactInfoHiringManager.phone}</div>
                </div>



                {job.jobLocation.address && (
                <div className='flex flex-col items-center'>
                    <div>Location:</div>
                    <div>{job.jobLocation.address}</div>
                    <div>{job.jobLocation.city}, {job.jobLocation.state}, {job.jobLocation.zip}</div>
                </div>
                )}
                <div className='flex flex-col items-center'> 
                    <div onClick={editStatus} className="cursor-pointer hover:text-C3">
                                {showEditStatus ? "close" : job.status}
                    </div>
                    {showEditStatus && (
                                <div>
                                    <EditStatus job={job} />
                                </div>
                    )}
                    {renderFavoriteStatus()}
                </div>
                <div className='flex flex-col items-center'>
                    <button onClick={toggleEditForm} className='hover:text-C3'>
                            {editFormIsOpen ? "Close" : "Edit"}
                    </button>
                    <button onClick={handleDelete} className='hover:text-C5'>
                        Delete
                    </button>
                </div>
            </div>
            { editFormIsOpen && 
                <EditJobItemForm job={job} setJob={setJob} setEditFormIsOpen={setEditFormIsOpen}></EditJobItemForm>
            }
        </main>
        </>
    )
}