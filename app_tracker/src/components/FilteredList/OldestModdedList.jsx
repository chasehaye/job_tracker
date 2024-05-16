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
        <div>
            <h2>Oldest Jobs</h2>
            <p>------------</p>
            <JobList jobs={oldestJobs}>
            </JobList>
            <p>------------</p>
        </div>
    );
};

export default OldestModdedList;