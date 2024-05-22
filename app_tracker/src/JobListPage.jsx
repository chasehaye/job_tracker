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
    <main>
      <h1>List</h1>
      <h3>Add a filter toggle to the list </h3>
      <h1>================</h1>
      <JobList jobs={jobs}>
      </JobList>
    </main>
    </>
  );
}

