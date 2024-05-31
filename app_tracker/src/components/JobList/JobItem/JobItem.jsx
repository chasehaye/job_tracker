import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditStatus from "./EditStatus";

export default function JobItem({ job }) {
    const [showLinks, setShowLinks] = useState(false);
    const [showContacts, setShowContacts] = useState(false);
    const [showEditStatus, setShowEditStatus] = useState(false);
    const [showCompany, setShowCompany] = useState(true); // New state for toggling Company section
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

    const toggleCompanyManager = () => {
        setShowCompany((prev) => !prev);
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
                        <div onClick={editStatus} className="cursor-pointer hover:text-C3">
                            {showEditStatus ? "close" : job.status}
                        </div>
                        <div>{job.payPerYear}</div>
                    </div>

                    {windowWidth > 768 && (
                        <div className="text-center">
                            <div>
                                <button onClick={toggleContacts} className="hover:text-C3">
                                    {showContacts ? "Hide contacts" : "Show contacts"}
                                </button>
                            </div>
                            <div>
                                <button onClick={toggleLinks} className="hover:text-C3">
                                    {showLinks ? "Hide links" : "Show links"}
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="text-center">
                        {showLinks && (
                            <div>
                                <p>Application: {job.companyApplicationSiteLink}</p>
                                <p>Company: {job.companySiteLink}</p>
                                <p>Platform: {job.recruitingPlatform}</p>
                            </div>
                        )}
                        {showContacts && (
                            <div>
                                {showCompany ? (
                                    <div>
                                        <div>{job.contactInfoCompany.name}</div>
                                        <div>{job.contactInfoCompany.email}</div>
                                        <div>{job.contactInfoCompany.phone}</div>
                                    </div>
                                ) : (
                                    <div>
                                        <div>{job.contactInfoHiringManager.name}</div>
                                        <div>{job.contactInfoHiringManager.email}</div>
                                        <div>{job.contactInfoHiringManager.phone}</div>
                                    </div>
                                )}
                                <button onClick={toggleCompanyManager} className="hover:text-C3">
                                    {showCompany ? "Show Manager" : "Show Company"}
                                </button>
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