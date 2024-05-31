import { jobsIndexRequest } from "../utilities/jobs-api";
import { useEffect, useState } from "react";
import JobList from "./components/JobList/JobList";

export default function JobListPage(){

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    async function getJobs() {
      const jobs = jobsIndexRequest();
      setJobs(jobs);
    }
    getJobs();
  }, [])

  return (
    <>
    <main className="mt-6 text-center">
      add filter functionality //
      pagify and add appropriate route
      <JobList jobs={jobs}>
      </JobList>
    </main>
    </>
  );
}

