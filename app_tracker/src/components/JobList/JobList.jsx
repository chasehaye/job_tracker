import React, { useState, useEffect } from 'react';
import JobItem from './JobItem/JobItem';

export default function JobList({jobs}) {
    const [jobsComponent, setJobsComponent] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const resolvedJobs = await jobs;
                const mappedJobs = resolvedJobs.map(job => (
                    <JobItem key={job._id} job={job} />
                ));
                setJobsComponent(mappedJobs);
            } catch (error) {
                console.error('Error fetching:', error);
            }
        };
        fetchJobs();
    }, [jobs]);

    return (
        <>
            <main className="pt-6">
                    {jobsComponent}

            </main>

        </>
    )
}