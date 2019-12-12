import {
	SWITCH_FILTER,
	UPDATE_JOBS,
	SET_OPENED_JOB,
	SET_QUERY,
	SET_LOADING_STATUS,
} from "./actions";

const updateJobHandler = (state, action) => {
	const {jobs, isNext} = action.payload;
	return {
		...state,
		jobs,
		isNext
	};
};

const switchFilter = (state, action) => {
	return {
		...state,
		isFilterOpen: action.payload
	};
};

const setOpenedJobHandler = (state, action) => {
	return {
		...state,
		openedJob: action.payload
	}
};

const setQueryHandler = (state, action) => {
	return {
		...state,
		query: {
			...state.query,
			...action.payload,
		}
	}
};

const setLoadingStatusHandler = (state, action) => {
	return {
		...state,
		isLoading: action.payload,
		isFirstLoad: false,
	}
};

function reducer(state, action) {
	switch (action.type) {
		case UPDATE_JOBS: return updateJobHandler(state, action);
		case SWITCH_FILTER: return switchFilter(state, action);
		case SET_OPENED_JOB: return setOpenedJobHandler(state, action);
		case SET_QUERY: return  setQueryHandler(state, action);
		case SET_LOADING_STATUS: return  setLoadingStatusHandler(state, action);
		default: return state;
	}
}

export default reducer;