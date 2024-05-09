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
            <p>================================</p>
            <div> {job.jobName} ||| {job._id} </div>
            <p>================================</p>
            <button onClick={handleDelete}>Delete</button>
            <p>================================</p>
            <button onClick={toggleEditForm}>
                    {editFormIsOpen ? "Close" : "Edit"}
                </button>
                { editFormIsOpen && 
                    <EditJobItemForm job={job} setJob={setJob} setEditFormIsOpen={setEditFormIsOpen}></EditJobItemForm>
                }
        </>
    )
}