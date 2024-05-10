import sendRequest from "./send-request";
const BASE_URL = '/api/tech';

export async function techIndexRequest(){
    return sendRequest(BASE_URL);
}

export async function createNewTech(techData){
    return sendRequest(BASE_URL, 'POST', techData);
}

export async function getTechRequest(techId){
    return sendRequest(`${BASE_URL}/${techId}`);
}