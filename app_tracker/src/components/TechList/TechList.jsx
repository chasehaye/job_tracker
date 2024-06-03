import { useState, useEffect } from "react";
import TechItem from "./TechItem/TechItem";

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
    <div className="grid grid-cols-1 gap-1 overflow-auto md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 mb-10">
        {techComponent}
    </div>
    </>
    )
}