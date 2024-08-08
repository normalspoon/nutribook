import sendRequest from "./send-request";

const BASE_URL = 'api/plans';

export function createPlan(planData) {
    return sendRequest(BASE_URL, 'POST', planData);
}

export function getPlans() {
    return sendRequest(`${BASE_URL}`)
}