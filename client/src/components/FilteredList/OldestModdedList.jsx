import  { useEffect, useState } from 'react';
import { getFilteredList } from '../../../utilities/jobs-api';
import JobList from '../JobList/JobList';

const OldestModdedList = () => {
    const [oldestJobs, setOldestJobs] = useState([]);

    useEffect(() => {
        async function fetchOldestJobs() {
            try {
                const category = 'null';
                const value = 'null';
                const order = 'ascending';
                const oldestjobs = await getFilteredList(category, value, order);
                setOldestJobs(oldestjobs);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }

        fetchOldestJobs();
    }, []);

    return (
        <div className='m-4'>
            <h2 className='font-bold'>Oldest Jobs</h2>
            <JobList jobs={oldestJobs}>
            </JobList>
        </div>
    );
};

export default OldestModdedList;