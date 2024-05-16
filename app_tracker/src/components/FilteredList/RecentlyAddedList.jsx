import  { useEffect, useState } from 'react';
import { getFilteredList } from '../../../utilities/jobs-api';
import JobList from '../JobList/JobList';

const RecentlyAddedList = () => {
    const [recentJobs, setRecentJobs] = useState([]);

    useEffect(() => {
        async function fetchRecentJobs() {
            try {
                const category = 'null';
                const value = 'null';
                const order = 'descending';
                const jobs = await getFilteredList(category, value, order);
                setRecentJobs(jobs);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }

        fetchRecentJobs();
    }, []);

    return (
        <div>
            <h2>Recently added Jobs</h2>
            <p>+++++++++++++</p>
            <JobList jobs={recentJobs}>
            </JobList>
            <p>++++++++++++</p>
        </div>
    );
};

export default RecentlyAddedList;