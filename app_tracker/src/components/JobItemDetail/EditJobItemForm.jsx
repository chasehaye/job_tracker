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

        <label className='block text-center mx-auto underline text-lg mb-6'>Edit</label>


        <div className="flex flex-col items-start lg:flex-row lg:items-center lg:gap-4 ml-4">
            <div className="mb-4 lg:mb-0">
                <label htmlFor="jobName" className="mr-2">Job: </label>
                <input type="text" id="jobName" ref={jobNameRef} defaultValue={job.jobName} className="border  px-2 py-1"/>
            </div>
            <div>
                <label htmlFor="jobTitle" className="mr-2">Title: </label>
                <input type="text" id="jobTitle" ref={jobTitleRef} defaultValue={job.jobTitle} className="border  px-2 py-1"/>
            </div>
            <div>
                <label htmlFor="pay" className="mr-2">Pay: </label>
                <input type="number" id="pay" ref={payPerYearRef} defaultValue={job.payPerYear} className="border  px-2 py-1"/>
            </div>
        </div>


        <label htmlFor="jobDescription" className='block text-center mx-auto pt-6 underline'>Description</label>
        <div className="w-full max-w-screen-lg mx-auto pt-10">
        <textarea id="jobDescription" ref={jobDescriptionRef} defaultValue={job.jobDescription} className="w-full max-w-screen-lg mx-auto p-2 border border-C7 h-32"></textarea>
        </div>


        <div className="flex flex-col items-start lg:flex-row lg:items-center lg:gap-4 mt-6 ml-4">
            <div>
                <label htmlFor="address" className="mr-2">Address: </label>
                <input type="text" id="address" ref={jobLocationAddressRef} defaultValue={job.jobLocation.address} className="border  px-2 py-1"/>
            </div>
            <div>
                <label htmlFor="city" className="mr-2">City: </label>
                <input type="text" id="city" ref={jobLocationCityRef} defaultValue={job.jobLocation.city} className="border  px-2 py-1"/>
            </div>
            <div>
                <label htmlFor="state" className="mr-2">State: </label>
                <input type="text" id="state" ref={jobLocationStateRef} defaultValue={job.jobLocation.state} className="border  px-2 py-1"/>
            </div>
            <div>
                <label htmlFor="zip" className="mr-2">Area Code: </label>
                <input type="number" id="zip" ref={jobLocationZipRef} defaultValue={job.jobLocation.zip} className="border  px-2 py-1"/>
            </div>
        </div>


        <div className="flex flex-col items-start justify-between md:items-center 2xl:flex-row 2xl:gap-4 2xl:px-20 mt-10">
            <div className="mb-4 lg:mb-0 flex flex-col items-start 2xl:items-center">
                <div className='mb-4 underline links-container text-center'>
                    Links
                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="site" className="mr-2">Company: </label>
                    <input type="text" id="site" ref={companySiteLinkRef} defaultValue={job.companySiteLink} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="applicationSite" className="mr-2">Application Portal: </label>
                    <input type="text" id="applicationSite" ref={companyApplicationSiteLinkRef} defaultValue={job.companyApplicationSiteLink} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="platform" className="mr-2">Application Platform: </label>
                    <input type="text" id="platform" ref={recruitingPlatformRef} defaultValue={job.recruitingPlatform} className="border  px-2 py-1"/>
                </div>
            </div>
            <div className="mb-4 lg:mb-0 flex flex-col items-start 2xl:items-center">
                <div className='mb-4 underline links-container text-center'>
                    Company
                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="companyName" className="mr-2">Name: </label>
                    <input type="text" id="companyName" ref={companyNameRef} defaultValue={job.contactInfoCompany.name} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="companyEmail" className="mr-2">Email: </label>
                    <input type="text" id="companyEmail" ref={companyEmailRef} defaultValue={job.contactInfoCompany.email} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="companyPhone" className="mr-2">Phone: </label>
                    <input type="number" id="companyPhone" ref={companyPhoneRef} defaultValue={job.contactInfoCompany.phone} className="border  px-2 py-1"/>
                </div>
            </div>
            <div className="mb-4 lg:mb-0 flex flex-col items-start 2xl:items-center">
                <div className='mb-4 underline links-container text-center'>
                    Manager
                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="managerName" className="mr-2">Name: </label>
                    <input type="text" id="managerName" ref={managerNameRef} defaultValue={job.contactInfoHiringManager.name} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="managerEmail" className="mr-2">Email: </label>
                    <input type="text" id="managerEmail" ref={managerEmailRef} defaultValue={job.contactInfoHiringManager.email} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="managerPhone" className="mr-2">Phone: </label>
                    <input type="number" id="managerPhone" ref={managerPhoneRef} defaultValue={job.contactInfoHiringManager.phone} className="border  px-2 py-1"/>
                </div>
            </div>
        </div>


        <div className="mb-4 text-center">
            <label htmlFor="status" className='mr-2'>Status:</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Offered">Offered</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
            <option value="Stalled">Stalled</option>
            </select>
        </div>
        <div className="mb-4 text-center">
            <button className="bg-C3 text-white p-2 mx-4 rounded text-sm hover:bg-C8 border mt-2">Update</button>
        </div>
        </form>
            </>
    )
}