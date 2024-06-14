import { useState } from 'react';
import EditTechItemForm from './EditTechDetail';

export default function TechItemDetail({tech, handleDelete, setTech}){
    const [editFormIsOpen, setEditFormIsOpen] = useState(false);
    function toggleEditForm(){
        setEditFormIsOpen((previousState) => {
            return !previousState;
        })
    }
    return(
        <>
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-C2 text-C6 card-shadow pt-6 pb-6 px-8 mx-4 mb-8 lg:grid-cols-3 mt-6">
            <div className='flex flex-col items-center'>
                {tech.name}
            </div>
            <div className='flex flex-col items-center'>
                <button onClick={toggleEditForm} className='hover:text-C3'>
                    {editFormIsOpen ? "Close" : "Edit"}
                </button>
            </div>
            <div className='flex flex-col items-center'>
                <button className='hover:text-C5' onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
        { editFormIsOpen &&
                    <EditTechItemForm tech={tech} setTech={setTech} setEditFormIsOpen={setEditFormIsOpen}/>
                }
        </>
    )
}