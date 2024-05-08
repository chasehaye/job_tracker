import { checkToken } from "../utilities/users-service";
import { jobsIndexRequest } from "../utilities/jobs-api";
import { useEffect, useState } from "react";
import JobList from "./components/JobList/JobList";

export default function JobListPage(){
  
  // TEMPORARY test TEMPORARY
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  //TEMPORARY token TEMPORARY

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
      <button onClick={handleCheckToken}>Check Token Exp console</button>
      <h1>List</h1>
      <h1>=========================================</h1>
      <JobList jobs={jobs}>
      </JobList>
    </>
  );
}

