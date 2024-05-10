import { useState, useEffect } from "react";
import TechItem from "./TechItem";

export default function TechList({technologies}){
    const [techComponent, setTechComponent] = useState(null);

    useEffect(() => {
        const fetchTech = async () => {
            try{
                const resolvedTech = await technologies;
                const mappedTech = resolvedTech.map(tech => (
                    <TechItem key={tech._id} tech={tech} />
                ));
                setTechComponent(mappedTech);
            }catch(err){
                console.error('Error fetching:', err);
            }
        };
        fetchTech();
    }, [technologies])
    return (
    <>
        {techComponent}
    </>
    )
}