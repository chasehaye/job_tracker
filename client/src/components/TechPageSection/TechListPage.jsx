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
        <TechList technologies={technologies}>
        </TechList>
        </>
    )
}