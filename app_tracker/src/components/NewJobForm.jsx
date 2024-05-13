import { useRef, useState } from 'react';
import { createNewJob } from '../../utilities/jobs-api';
import { useNavigate } from "react-router-dom";


const NewJobForm = () => {
    const navigate = useNavigate();

    const jobNameRef = useRef('');
    const jobTitleRef = useRef('');
    const jobDescriptionRef = useRef('');
    const jobLocationAddressRef = useRef('');
    const jobLocationCityRef = useRef('');
    const jobLocationStateRef = useRef('');
    const jobLocationZipRef = useRef('');
    const payPerYearRef = useRef('');
    const companySiteLinkRef = useRef('');
    const companyApplicationSiteLinkRef = useRef('');
    const recruitingPlatformRef = useRef('');
    const companyNameRef = useRef('');
    const companyEmailRef = useRef('');
    const companyPhoneRef = useRef('');
    const managerNameRef = useRef('');
    const managerEmailRef = useRef('');
    const managerPhoneRef = useRef('');

    const [ error, setError ] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        const newJob = {
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

        }
        try {
            const newJobResponse = await createNewJob(newJob);
            navigate('/jobs');
        }catch(err) {
            setError(err);
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>

        <br />
        <p>Details:</p>

        <label htmlFor="jobName">Job: </label>
        <input type="text" id="jobName" ref={jobNameRef}/>

        <label htmlFor="jobTitle">Title: </label>
        <input type="text" id="jobTitle" ref={jobTitleRef}/>

        <label htmlFor="pay">Pay (per year): </label>
        <input type="number" id="pay" ref={payPerYearRef} />

        <label htmlFor="jobDescription">Description: </label>
        <input type="text" id="jobDescription" ref={jobDescriptionRef} />

        <br />
        <p>Adress:</p>

        <label htmlFor="address">Address: </label>
        <input type="text" id="address" ref={jobLocationAddressRef} />

        <label htmlFor="city">City: </label>
        <input type="text" id="city" ref={jobLocationCityRef} />

        <label htmlFor="state">State: </label>
        <input type="text" id="state" ref={jobLocationStateRef} />

        <label htmlFor="zip">Area Code: </label>
        <input type="number" id="zip" ref={jobLocationZipRef} />

        <br />
        <p>Links:</p>

        <label htmlFor="site">Company: </label>
        <input type="text" id="site" ref={companySiteLinkRef}/>

        <label htmlFor="applicationSite">Application Portal: </label>
        <input type="text" id="applicationSite" ref={companyApplicationSiteLinkRef}/>

        <label htmlFor="platform">Application Platform: </label>
        <input type="text" id="platform" ref={recruitingPlatformRef}/>

        <br />
        <p>Company Info:</p>

        <label htmlFor="companyName">Name: </label>
        <input type="text" id="companyName" ref={companyNameRef}/>

        <label htmlFor="companyEmail">Email: </label>
        <input type="text" id="companyEmail" ref={companyEmailRef}/>

        <label htmlFor="companyPhone">Phone: </label>
        <input type="number" id="companyPhone" ref={companyPhoneRef}/>

        <br />
        <p>Hiring Manager Info:</p>

        <label htmlFor="managerName">Name: </label>
        <input type="text" id="managerName" ref={managerNameRef}/>

        <label htmlFor="managerEmail">Email: </label>
        <input type="text" id="managerEmail" ref={managerEmailRef}/>

        <label htmlFor="managerPhone">Phone: </label>
        <input type="number" id="managerPhone" ref={managerPhoneRef}/>

        <br/>
        <br/>
        <button>Add job</button>
    </form>

    </>
  )
}

export default NewJobForm