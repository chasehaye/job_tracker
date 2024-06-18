import React, { useState } from 'react';
import { updateJobRequest } from '../../../../utilities/jobs-api';

export default function EditStatus({ job }) {
    const [error, setError] = useState('');
    const [status, setStatus] = useState(job.status);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (selectedStatus) => {
        setStatus(selectedStatus);
        setIsOpen(false);
    };

    const handleSubmit = async () => {
        const updatedStatus = {
            status: status
        };
        try {
            const modifiedStatus = await updateJobRequest(job._id, updatedStatus);
            setError('');
            window.location.reload();
        } catch (err) {
            setError("Bad update try again")
        }
    };

    return (
        <div className="flex justify-center items-center h-full py-2">
            <div className="flex">
                <div className="flex flex-col">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-4 py-2 mb-2 border rounded-md text-C7 bg-C1 focus:outline-none w-40"
                    >
                        {status}
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-C3 text-white py-1 mx-4 rounded text-sm hover:bg-C8 border mt-2"
                    >
                        Submit
                    </button>
                </div>
                {isOpen && (
                    <div className="absolute bg-C1 border rounded-md shadow-md w-40">
                        <button
                            onClick={() => handleOptionClick("Pending")}
                            className="block w-full px-4 py-2 text-left hover:bg-C8 rounded-md focus:outline-none  hover:text-C7"
                        >
                            Pending
                        </button>
                        <button
                            onClick={() => handleOptionClick("Interviewing")}
                            className="block w-full px-4 py-2 text-left hover:bg-C8 rounded-md focus:outline-none hover:text-C7"
                        >
                            Interviewing
                        </button>
                        <button
                            onClick={() => handleOptionClick("Offered")}
                            className="block w-full px-4 py-2 text-left hover:bg-C8 rounded-md focus:outline-none hover:text-C7"
                        >
                            Offered
                        </button>
                        <button
                            onClick={() => handleOptionClick("Accepted")}
                            className="block w-full px-4 py-2 text-left hover:bg-C8 rounded-md focus:outline-none hover:text-C7"
                        >
                            Accepted
                        </button>
                        <button
                            onClick={() => handleOptionClick("Rejected")}
                            className="block w-full px-4 py-2 text-left hover:bg-C8 rounded-md focus:outline-none hover:text-C7"
                        >
                            Rejected
                        </button>
                        <button
                            onClick={() => handleOptionClick("Stalled")}
                            className="block w-full px-4 py-2 text-left hover:bg-C8 rounded-md focus:outline-none hover:text-C7"
                        >
                            Stalled
                        </button>
                    </div>
                )}
            </div>
            {error && <p>{JSON.stringify(error)}</p>}
        </div>
    );
}