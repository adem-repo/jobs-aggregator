export const UPDATE_JOBS = 'UPDATE';
export const UPDATE_LIMIT = 'UPDATE_LIMIT';
export const SWITCH_FILTER = 'CLOSE_FILTER';
export const SET_OPENED_JOB = 'SET_OPENED_JOB';
export const SET_PAGE = 'SET_PAGE';
export const SET_QUERY = 'SET_QUERY';

const setAction = type => payload => ({type, payload});

export const updateJobsAction = setAction(UPDATE_JOBS);
export const updateLimitAction = setAction(UPDATE_LIMIT);
export const switchFilterAction = setAction(SWITCH_FILTER);
export const setOpenedJobAction = setAction(SET_OPENED_JOB);
export const setPageAction = setAction(SET_PAGE);
export const setQueryAction = setAction(SET_QUERY);