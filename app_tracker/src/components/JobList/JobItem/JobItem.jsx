import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditStatus from "./EditStatus";

export default function JobItem({ job }) {
    const [showLinks, setShowLinks] = useState(false);
    const [showContacts, setShowContacts] = useState(false);
    const [showEditStatus, setShowEditStatus] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const toggleLinks = () => {
        setShowLinks((prev) => !prev);
        if (!showLinks && showContacts) {
            setShowContacts(false);
        }
    };
    const toggleContacts = () => {
        setShowContacts((prev) => !prev);
        if (!showContacts && showLinks) {
            setShowLinks(false);
        }
    };
    const editStatus = () => {
        setShowEditStatus((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div>
                <div className="grid grid-cols-3 gap-4 rounded-lg bg-C4 text-C6 card-shadow pt-4 pb-6 px-8 mx-4 mb-8">
                    <div>
                        <Link to={`/jobs/${job._id}`}>
                            <div>{job.jobName}</div>
                            <div>{job.jobTitle}</div>
                        </Link>
                        <div onClick={editStatus} className="cursor-pointer">
                            {showEditStatus ? "close" : job.status}
                        </div>
                        <div>{job.payPerYear}</div>
                    </div>

                    {windowWidth > 768 && (
                        <div>
                            <div>
                                <button onClick={toggleContacts}>
                                    {showContacts ? "Hide contacts" : "Show contacts"}
                                </button>
                            </div>
                            <div>
                                <button onClick={toggleLinks}>
                                    {showLinks ? "Hide links" : "Show links"}
                                </button>
                            </div>
                        </div>
                    )}
                        
                        
                        
                    <div>
                        {showLinks && (
                            <div>
                                <p>Company: {job.companySiteLink}</p>
                                <p>Application Site: {job.companyApplicationSiteLink}</p>
                                <p>Recruiting Platform: {job.recruitingPlatform}</p>
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
                        {showEditStatus && (
                            <div>
                                <EditStatus job={job} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}