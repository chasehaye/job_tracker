import { useState } from 'react';
import EditJobItemForm from './EditJobItemForm';

export default function JobItemDetail({job, handleDelete, setJob}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    function toggleEditForm(){
        setEditFormIsOpen((previousState) => {
            return !previousState;
        })
    }


    return(
        <>
            <p>==================</p>
                <div> {job.jobName} </div>
                <div> {job.jobTitle} </div>
                <div> {job.payPerYear} </div>
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