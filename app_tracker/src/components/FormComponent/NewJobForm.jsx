import { useRef, useState, useEffect } from 'react';
import { createNewJob, getJobRequest } from '../../../utilities/jobs-api';
import { useNavigate } from "react-router-dom";
import { techIndexRequest } from '../../../utilities/technologies-api';


const NewJobForm = ({user}) => {
    const navigate = useNavigate();
    const [ error, setError ] = useState('');
    const [ technologies, setTechnologies ] = useState([]);
    const [ selectedTechnologies, setSelectedTechnologies] = useState([]);

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
    const favoriteRef = useRef(false);


    useEffect(() => {
        // Fetch technologies when component mounts
        const fetchTechnologies = async () => {
            try {
                const techs = await techIndexRequest();
                setTechnologies(techs);
            } catch (err) {
                setError(err);
            }
        };

        fetchTechnologies();
    }, []);



    const handleTechnologyClick = (techId) => {
        setSelectedTechnologies((prevSelected) => {
            if (prevSelected.includes(techId)) {
                // Deselect tech
                return prevSelected.filter((id) => id !== techId);
            } else {
                // Select tech
                return [...prevSelected, techId];
            }
        });
    };

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
            favorite: favoriteRef.current.checked,
            jobTechnologies: selectedTechnologies,
            user: user._id

        }
        try {
            const newJobResponse = await createNewJob(newJob);
            console.log(newJobResponse)
            navigate(`/jobs/${newJobResponse._id}`);
        }catch(err) {
            setError(err);
        }
    }

  return (
    <>
    <form onSubmit={handleSubmit}>


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
        <br />

        <label>Technologies:</label>
                <div className="technology-list">
                    {technologies.map((tech) => (
                        <span
                            key={tech._id}
                            onClick={() => handleTechnologyClick(tech._id)}
                            className={selectedTechnologies.includes(tech._id) ? "selected" : ""}
                        >
                            | {tech.name} |
                        </span>
                    ))}
                </div>

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

        <br />

        <label htmlFor="favorite">Favorite (yes or no): </label>
        <input type="checkbox" id="favorite" ref={favoriteRef} />



        <br/>
        <br/>
        <button>Add job</button>
    </form>

    </>
  )
}

export default NewJobForm