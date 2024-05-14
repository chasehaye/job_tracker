import { useState, useRef } from "react";
import { updateTechRequest } from "../../../utilities/technologies-api";

export default function EditTechItemForm({tech, setTech, setEditFormIsOpen}){

    const [error, setError] = useState('');
    const techNameRef = useRef(tech.name);

    async function handleSubmit(e){
        e.preventDefault()
        const updatedTech = {
            name: techNameRef.current.value,
        }
        try{
            const newTech = await updateTechRequest(tech._id, updatedTech)
            setTech(newTech)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Bad update try again")
        }
    }
    return(
        <>
        { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>

        <label htmlFor="techName">Tech: </label>
        <input type="text" id="techName" ref={techNameRef} defaultValue={tech.name}/>

        <button>Update</button>
        </form>
        </>
    )
}