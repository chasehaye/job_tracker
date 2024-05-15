import React, { useEffect, useState } from 'react';
import { getFilteredList } from '../../../utilities/jobs-api';
import JobList from '../JobList/JobList';

const InterviewingList = () => {
    const [interviewingJobs, setInterviewingJobs] = useState([]);

    useEffect(() => {
        async function fetchInterviewingJobs() {
            try {
                const category = 'status';
                const value = 'Pending';
                const jobs = await getFilteredList(category, value);
                setInterviewingJobs(jobs);
            } catch (error) {
                console.error('Error fetching interviewing jobs:', error);
            }
        }

        fetchInterviewingJobs();
    }, []);

    const[stalledJobs, setStalledJobs] = useState([]);

    useEffect(() => {
        async function fetchStalledJobs() {
            try {
                const category = 'status';
                const value = 'Stalled';
                const jobs = await getFilteredList(category, value);
                setStalledJobs(jobs);
            } catch (error) {
                console.error('Error fetching interviewing jobs:', error);
            }
        }

        fetchStalledJobs();
    }, []);

    return (
        <div>
            <h2>Interviewing Jobs</h2>
            <p>+++++++++++++</p>
            <JobList jobs={interviewingJobs}>
            </JobList>
            <p>++++++++++++</p>
            <p>------------</p>
            <h2>Stalled Jobs</h2>
            <JobList jobs={stalledJobs}>
            </JobList>
            <p>------------</p>
        </div>
    );
};

export default InterviewingList;