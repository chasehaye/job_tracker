import { Link } from "react-router-dom";

export default function TechItem({tech}){
    return(
        <>
            <div className="text-center hover:text-C3">
                <Link to={`/tech/${tech._id}`}>
                    <div>| {tech.name} |</div>
                </Link>
            </div>
        </>
    )
}