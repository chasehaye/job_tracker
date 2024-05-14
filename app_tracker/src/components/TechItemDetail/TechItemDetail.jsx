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
            <div>
                ++ {tech.name} ++
            </div>
            <div>
                <button onClick={toggleEditForm}>
                    { editFormIsOpen ? "close" : "edit"}
                </button>
                { editFormIsOpen &&
                    <EditTechItemForm tech={tech} setTech={setTech} setEditFormIsOpen={setEditFormIsOpen}/>
                }
            </div>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}