import sendRequest from './send-request';
const BASE_URL = '/api/jobs';

export async function jobsIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createNewJob(jobData) {
    return sendRequest(BASE_URL, 'POST', jobData);
}

export async function getJobRequest(jobId){
    return sendRequest(`${BASE_URL}/${jobId}`);
}

export async function deleteJobRequest(jobId){
    return sendRequest(`${BASE_URL}/${jobId}`, 'DELETE');
}

export async function updateJobRequest(jobId, jobData){
    return sendRequest(`${BASE_URL}/${jobId}`, 'PUT', jobData);
}

export async function getFilteredList(category, value, order){
    return sendRequest(`${BASE_URL}/category/${category}/${value}/${order}`)
}