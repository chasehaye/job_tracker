import React, { useState, useEffect } from "react";
import { jobsIndexRequest } from "../utilities/jobs-api";
import JobList from "./components/JobList/JobList";

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Initial page 1
  const itemsPerPage = 5;

  useEffect(() => {
    async function getJobs() {
      const fetchedJobs = await jobsIndexRequest();
      setJobs(fetchedJobs);
    }
    getJobs();
  }, []);

  const handleDecrement = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleIncrement = () => {
    const maxPages = Math.ceil(jobs.length / itemsPerPage); // total pages
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const getVisibleJobs = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return jobs.slice(startIndex, endIndex);
  };

  return (
    <>
      <main className="mt-6 text-center">
        {/* Filter functionality (add your implementation here) */}
        <JobList jobs={getVisibleJobs()} />

        <div className="flex flex-row mx-auto mt-4">
          <button
            className="ml-auto dec cursor-pointer"
            type="button"
            disabled={currentPage === 1}
            onClick={handleDecrement}
          >
            <span>&lt;</span>
          </button>
          <div className="px-2">
            {currentPage}
          </div>
          <button
            className="mr-auto inc cursor-pointer"
            type="button"
            disabled={currentPage === Math.ceil(jobs.length / itemsPerPage)}
            onClick={handleIncrement}
          >
            <span>&gt;</span>
          </button>
        </div>
      </main>
    </>
  );
}