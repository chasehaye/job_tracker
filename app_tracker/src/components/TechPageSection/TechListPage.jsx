import { useEffect, useState } from "react";
import { techIndexRequest } from "../../../utilities/technologies-api";
import TechList from "../TechList/TechList";

export default function TechListPage(){

    const [technologies, setTechnologies] = useState([]);
    useEffect(() => {
        async function getTechnologies() {
            const technologies = techIndexRequest();
            setTechnologies(technologies);
        }
        getTechnologies();
    }, [])

    return(
        <>
        <div className="block text-center mx-auto underline text-lg mb-6 mt-10">List of Exisitng Technologies</div>
        <TechList technologies={technologies}>
        </TechList>
        </>
    )
}