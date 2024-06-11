import  { useEffect, useState } from 'react';
import { getFilteredList } from '../../../utilities/jobs-api';
import JobList from '../JobList/JobList';

const InterviewingList = () => {
    const [interviewingJobs, setInterviewingJobs] = useState([]);

    useEffect(() => {
        async function fetchInterviewingJobs() {
            try {
                const category = 'status';
                const value = 'Interviewing';
                const order = 'descending';
                const jobs = await getFilteredList(category, value, order);
                setInterviewingJobs(jobs);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }

        fetchInterviewingJobs();
    }, []);

    return (
        <div className='m-4'>
            <h2 className='font-bold'>Interviewing Jobs</h2>
            <JobList jobs={interviewingJobs}>
            </JobList>
        </div>
    );
};

export default InterviewingList;