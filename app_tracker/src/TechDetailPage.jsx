import { useParams, useNavigate } from "react-router-dom";
import { getTechRequest, deleteTechRequest } from "../utilities/technologies-api";
import { useEffect, useState } from "react";
import TechItemDetail from "./components/TechItemDetail/TechItemDetail";

export default function TechDetailPage(){
    let { techId } = useParams();
    const [tech, setTech] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchTech() {
            try{
                const techData = await getTechRequest(techId);
                if(techData) {
                    setTech(techData);
                    setLoading(false);
                } else {
                    setError("No technologies added");
                    setLoading(false);
                }
            }catch(err){
                console.error("Error:", error);
                setError("Error retreving tech redirect");
                setLoading(false);
            }
        }
        if(techId) {
            fetchTech();
        }
    }, [techId]);

    async function handleDelete(e){
        const deleteResponse = await deleteTechRequest(tech._id);
        if(deleteResponse.data === 'success'){
            navigate('/')
        }
    }

    return(
        <>
        <TechItemDetail tech={tech} handleDelete={handleDelete} setTech={setTech}/>
        </>
    )
}