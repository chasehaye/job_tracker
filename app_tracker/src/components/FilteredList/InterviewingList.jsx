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
        <div>
            <h2>Interviewing Jobs</h2>
            <p>////////////////////</p>
            <JobList jobs={interviewingJobs}>
            </JobList>
            <p>///////////////////</p>
        </div>
    );
};

export default InterviewingList;