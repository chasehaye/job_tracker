import { useState } from 'react';

export default function TechItemDetail({tech, handleDelete}){
    return(
        <>
            <div>
                ++ {tech.name} ++
            </div>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}