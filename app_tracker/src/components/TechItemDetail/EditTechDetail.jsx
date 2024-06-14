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
            <div className="flex flex-col ">
                <div className="text-center">
                    <label htmlFor="techName" className="mr-2 my-2">Tech Name: </label>
                    <input type="text" id="techName" ref={techNameRef} defaultValue={tech.name} className="my-2"/>
                </div>
                <div className="text-center">
                    <button className="bg-C3 text-white p-2 mx-4 rounded text-sm hover:bg-C8 border mt-2">Update</button>
                </div>
            </div>
        </form>
        </>
    )
}