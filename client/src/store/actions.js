export const UPDATE_JOBS = 'UPDATE';
export const SWITCH_FILTER = 'CLOSE_FILTER';
export const SET_OPENED_JOB = 'SET_OPENED_JOB';
export const SET_QUERY = 'SET_QUERY';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

const setAction = type => payload => ({type, payload});

export const updateJobsAction = setAction(UPDATE_JOBS);
export const switchFilterAction = setAction(SWITCH_FILTER);
export const setOpenedJobAction = setAction(SET_OPENED_JOB);
export const setQueryAction = setAction(SET_QUERY);
export const setLoadingStatus = setAction(SET_LOADING_STATUS);