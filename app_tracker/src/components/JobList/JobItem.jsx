import { useState } from "react";
import { Link } from "react-router-dom";

export default function JobItem({job}){
    const [showLinks, setShowLinks] = useState(false);
    const [showContacts, setShowContacts] = useState(false);

    const toggleLinks = () => {
        setShowLinks((prev) => !prev);
        if (!showLinks && showContacts) {
            setShowContacts(false);
        }
    };
    const toggleContacts = () =>{
        setShowContacts((prev) => !prev);
        if (!showContacts && showLinks) {
            setShowLinks(false);
        }
    };

    return (
        <>
            <div>
                <Link to={`/jobs/${job._id}`}>
                    <div>|| {job.jobName} || {job.jobTitle} || {job.payPerYear} || {job.status} || </div>
                </Link>
            </div>


            <div>
                <button onClick={toggleLinks}>
                    {showLinks ? "//Toggle Links//" : "//Toggle Links//"}
                </button>
            </div>
            <div>
                <button onClick={toggleContacts}>
                    {showLinks ? "\\\\Toggle Contacts\\\\" : "\\\\Toggle Contacts\\\\"}
                </button>
            </div>



            {showLinks && (
                <div>
                    <p>
                        Company: {job.companySiteLink}
                    </p>
                    <p>
                    Application Site: {job.companyApplicationSiteLink}
                    </p>
                    <p>
                        Recruiting Platform: {job.recruitingPlatform}
                        </p>
                </div>
            )}
            {showContacts && (
                <div>
                    <p>
                        Company: {job.contactInfoCompany.name}_{job.contactInfoCompany.email}_{job.contactInfoCompany.phone}
                    </p>
                    <p>
                        Hiring Manager: {job.contactInfoHiringManager.name}_{job.contactInfoHiringManager.email}_{job.contactInfoHiringManager.phone}
                    </p>
                </div>
            )}



        </>
    )
}