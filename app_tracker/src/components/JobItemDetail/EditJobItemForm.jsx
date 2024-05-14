import { useState, useRef } from 'react';
import { updateJobRequest } from '../../../utilities/jobs-api';

export default function EditJobItemForm({job, setJob, setEditFormIsOpen}){

    const jobNameRef = useRef(job.jobName);
    const jobTitleRef = useRef(job.jobTitle);
    const jobDescriptionRef = useRef(job.jobDescription);
    const jobLocationAddressRef = useRef(job.jobLocation.address);
    const jobLocationCityRef = useRef(job.jobLocation.city);
    const jobLocationStateRef = useRef(job.jobLocation.state);
    const jobLocationZipRef = useRef(job.jobLocation.zip);
    const payPerYearRef = useRef(job.payPerYear);
    const companySiteLinkRef = useRef(job.companySiteLink);
    const companyApplicationSiteLinkRef = useRef(job.companyApplicationSiteLink);
    const recruitingPlatformRef = useRef(job.recruitingPlatform);
    const companyNameRef = useRef(job.contactInfoCompany.name);
    const companyEmailRef = useRef(job.contactInfoCompany.email);
    const companyPhoneRef = useRef(job.contactInfoCompany.phone);
    const managerNameRef = useRef(job.contactInfoHiringManager.name);
    const managerEmailRef = useRef(job.contactInfoHiringManager.email);
    const managerPhoneRef = useRef(job.contactInfoHiringManager.phone);

    const [status, setStatus] = useState(job.status);
    const [error, setError] = useState('');

    async function handleSubmit(e){
        e.preventDefault()
        const updatedJob = {
            jobName: jobNameRef.current.value,
            jobTitle: jobTitleRef.current.value,
            jobDescription: jobDescriptionRef.current.value,
            jobLocation:{
                address: jobLocationAddressRef.current.value,
                city: jobLocationCityRef.current.value,
                state: jobLocationStateRef.current.value,
                zip: jobLocationZipRef.current.value
            },
            payPerYear: payPerYearRef.current.value,
            companySiteLink: companySiteLinkRef.current.value,
            companyApplicationSiteLink: companyApplicationSiteLinkRef.current.value,
            recruitingPlatform: recruitingPlatformRef.current.value,
            contactInfoCompany:{
                name: companyNameRef.current.value,
                email: companyEmailRef.current.value,
                phone: companyPhoneRef.current.value
            },
            contactInfoHiringManager: {
                name: managerNameRef.current.value,
                email: managerEmailRef.current.value,
                phone: managerPhoneRef.current.value
            },
            status: status
        }
        try{
            const newJob = await updateJobRequest(job._id, updatedJob)
            setJob(newJob)
            setEditFormIsOpen(false)
        }catch(err){
            setError("Bad update try again")
        }
    }
    return(
        <>
        { error && <p>{JSON.stringify(error)}</p>}
        <form onSubmit={handleSubmit}>

        <label htmlFor="jobName">Job: </label>
        <input type="text" id="jobName" ref={jobNameRef} defaultValue={job.jobName}/>

        <label htmlFor="jobTitle">Title: </label>
        <input type="text" id="jobTitle" ref={jobTitleRef} defaultValue={job.jobTitle}/>

        <label htmlFor="pay">Pay (per year): </label>
        <input type="number" id="pay" ref={payPerYearRef} defaultValue={job.payPerYear}/>

        <label htmlFor="jobDescription">Description: </label>
        <input type="text" id="jobDescription" ref={jobDescriptionRef} defaultValue={job.jobDescription}/>

        <br />
        <p>Adress:</p>

        <label htmlFor="address">Address: </label>
        <input type="text" id="address" ref={jobLocationAddressRef} defaultValue={job.jobLocation.address}/>

        <label htmlFor="city">City: </label>
        <input type="text" id="city" ref={jobLocationCityRef} defaultValue={job.jobLocation.city}/>

        <label htmlFor="state">State: </label>
        <input type="text" id="state" ref={jobLocationStateRef} defaultValue={job.jobLocation.state}/>

        <label htmlFor="zip">Area Code: </label>
        <input type="number" id="zip" ref={jobLocationZipRef} defaultValue={job.jobLocation.zip}/>

        <br />
        <p>Links:</p>

        <label htmlFor="site">Company: </label>
        <input type="text" id="site" ref={companySiteLinkRef} defaultValue={job.companySiteLink}/>

        <label htmlFor="applicationSite">Application Portal: </label>
        <input type="text" id="applicationSite" ref={companyApplicationSiteLinkRef} defaultValue={job.companyApplicationSiteLink}/>

        <label htmlFor="platform">Application Platform: </label>
        <input type="text" id="platform" ref={recruitingPlatformRef} defaultValue={job.recruitingPlatform}/>

        <br />
        <p>Company Info:</p>

        <label htmlFor="companyName">Name: </label>
        <input type="text" id="companyName" ref={companyNameRef} defaultValue={job.contactInfoCompany.name}/>

        <label htmlFor="companyEmail">Email: </label>
        <input type="text" id="companyEmail" ref={companyEmailRef} defaultValue={job.contactInfoCompany.email}/>

        <label htmlFor="companyPhone">Phone: </label>
        <input type="number" id="companyPhone" ref={companyPhoneRef} defaultValue={job.contactInfoCompany.phone}/>

        <br />
        <p>Hiring Manager Info:</p>

        <label htmlFor="managerName">Name: </label>
        <input type="text" id="managerName" ref={managerNameRef} defaultValue={job.contactInfoHiringManager.name}/>

        <label htmlFor="managerEmail">Email: </label>
        <input type="text" id="managerEmail" ref={managerEmailRef} defaultValue={job.contactInfoHiringManager.email}/>

        <label htmlFor="managerPhone">Phone: </label>
        <input type="number" id="managerPhone" ref={managerPhoneRef} defaultValue={job.contactInfoHiringManager.phone}/>

        <br/>
        <br/>

        <label htmlFor="status">Status:</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Offered">Offered</option>
          <option value="Accepted">Accepted</option>
          <option value="Rejected">Rejected</option>
          <option value="Stalled">Stalled</option>
        </select>

        <br/>
        <br/>
        <button>Update</button>

        </form>
            </>
    )
}