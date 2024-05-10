import { Link } from "react-router-dom";

export default function TechItem({tech}){
    return(
        <>
            <div>
                <Link to={`/tech/${tech._id}`}>
                    <div>|| {tech.name} ||</div>
                </Link>
            </div>
        </>
    )
}