import { useRef, useState, useEffect } from 'react';
import { createNewJob, getJobRequest } from '../../../utilities/jobs-api';
import { useNavigate } from "react-router-dom";
import { techIndexRequest } from '../../../utilities/technologies-api';
import '../../main.css'

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
    <form onSubmit={handleSubmit} className=''>
        <label className='block text-center mx-auto underline text-lg mb-6'>Add Job</label>



        <div className="flex flex-col items-start lg:flex-row lg:items-center lg:gap-4 ml-4">
            <div className="mb-4 lg:mb-0">
                <label htmlFor="jobName" className="mr-2">Job:</label>
                <input type="text" id="jobName" ref={jobNameRef} className="border  px-2 py-1" />
            </div>
            <div className="mb-4 lg:mb-0">
                <label htmlFor="jobTitle" className="mr-2">Title:</label>
                <input type="text" id="jobTitle" ref={jobTitleRef} className="border px-2 py-1" />
            </div>
            <div className="mb-4 lg:mb-0">
                <label htmlFor="pay" className="mr-2">Pay:</label>
                <input type="number" id="pay" ref={payPerYearRef} className="border  px-2 py-1" />
            </div>
        </div>



        <label htmlFor="jobDescription" className='block text-center mx-auto pt-6 underline'>Description</label>
        <div className="w-full max-w-screen-lg mx-auto pt-10">
        <textarea id="jobDescription" ref={jobDescriptionRef} className="w-full max-w-screen-lg mx-auto p-2 border border-C7 h-32"></textarea>
        </div>


        <label className='block text-center mx-auto font-bold underline mb-2 pt-6'>Technologies</label>
        <div className="grid grid-cols-1 gap-1 overflow-auto max-h-20 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-8 mb-10">
        {technologies.map((tech) => (
                <span
                    key={tech._id}
                    onClick={() => handleTechnologyClick(tech._id)}
                    className={`cursor-pointer text-center ${selectedTechnologies.includes(tech._id) ? "selected" : ""}`}
                >
                    | {tech.name} |
                </span>
            ))}
        </div>


        <div className="flex flex-col items-start lg:flex-row lg:items-center lg:gap-4 mt-6 ml-4">
            <div className="mb-4">
                <label htmlFor="address" className="mr-2">Address: </label>
                <input type="text" id="address" ref={jobLocationAddressRef} className="border  px-2 py-1" />
            </div>
            <div className="mb-4">
                <label htmlFor="city" className="mr-2">City: </label>
                <input type="text" id="city" ref={jobLocationCityRef} className="border  px-2 py-1" />
            </div>
            <div className="mb-4">
                <label htmlFor="state" className="mr-2">State: </label>
                <input type="text" id="state" ref={jobLocationStateRef} className="border  px-2 py-1" />
            </div>
            <div className="mb-4">
                <label htmlFor="zip" className="mr-2">Zip Code: </label>
                <input type="number" id="zip" ref={jobLocationZipRef} className="border  px-2 py-1" />
            </div>
        </div>
        

        <div className="flex flex-col items-start justify-between md:items-center 2xl:flex-row 2xl:gap-4 2xl:px-20 mt-10">
            <div className="mb-4 lg:mb-0 flex flex-col items-start 2xl:items-center">
                <div className='mb-4 underline links-container text-center'>
                    Links
                </div>
                <div className="mb-4 links-container text-center">
                    <label htmlFor="site" className="mr-2">Company:</label>
                    <input type="text" id="site" ref={companySiteLinkRef} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 links-container text-center">
                    <label htmlFor="applicationSite" className="mr-2">Application:</label>
                    <input type="text" id="applicationSite" ref={companyApplicationSiteLinkRef} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 links-container text-center">
                    <label htmlFor="platform" className="mr-2">Platform:</label>
                    <input type="text" id="platform" ref={recruitingPlatformRef} className="border  px-2 py-1"/>
                </div>
            </div>
            <div className="mb-4 lg:mb-0 flex flex-col items-start 2xl:items-center">
                <div className='mb-4 underline links-container text-center'>
                    Company
                </div>
                <div className="mb-4 links-container text-center">
                    <label htmlFor="companyName" className="mr-2">Name:</label>
                    <input type="text" id="companyName" ref={companyNameRef} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 links-container text-center">
                    <label htmlFor="companyEmail" className="mr-2">Email:</label>
                    <input type="text" id="companyEmail" ref={companyEmailRef} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 links-container text-center">
                    <label htmlFor="companyPhone" className="mr-2">Phone:</label>
                    <input type="number" id="companyPhone" ref={companyPhoneRef} className="border  px-2 py-1"/>
                </div>
            </div>
            <div className="mb-4 lg:mb-0 flex flex-col items-start 2xl:items-center">
                <div className='mb-4 underline links-container text-center'>
                    Manager
                </div>
                <div className="mb-4 links-container text-center">
                    <label htmlFor="managerName" className="mr-2">Name:</label>
                    <input type="text" id="managerName" ref={managerNameRef} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 links-container text-center">
                    <label htmlFor="managerEmail" className="mr-2">Email:</label>
                    <input type="text" id="managerEmail" ref={managerEmailRef} className="border  px-2 py-1"/>
                </div>
                <div className="mb-4 links-container text-center">
                    <label htmlFor="managerPhone" className="mr-2">Phone:</label>
                    <input type="number" id="managerPhone" ref={managerPhoneRef} className="border  px-2 py-1"/>
                </div>
            </div>
        </div>



        <div className="flex flex-col items-center justify-center mt-4 mb-20 md:flex-row md:justify-center">
    <div className="mx-auto mb-4 md:mb-0 md:mr-4">
        <label htmlFor="favorite" className="block mb-2 text-center">Favorite </label>
        <div className="flex justify-center items-center space-x-2">
            <input type="checkbox" id="favorite" ref={favoriteRef} className="form-checkbox h-6 w-6" />
            <span className="text-sm">Yes</span>
        </div>
    </div>
    <div className="mx-auto">
        <button className="bg-C3 text-white py-1 px-6 rounded text-sm hover:bg-C8 mt-2 h-10 font-bold">Add</button>
    </div>
</div>
    </form>

    </>
  )
}

export default NewJobForm