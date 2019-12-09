import {
	SWITCH_FILTER,
	UPDATE_JOBS,
	UPDATE_LIMIT,
	SET_OPENED_JOB,
	SET_PAGE,
	SET_QUERY,
} from "./actions";

const updateJobHandler = (state, action) => {
	const {jobs, isNext} = action.payload;
	console.log(jobs);
	return {
		...state,
		jobs,
		isNext
	};
};

const updateLimitHandler = (state, action) => {
	return {
		...state,
		limit: action.payload
	};
};

const switchFilter = (state, action) => {
	if (action.payload)
		document.body.style.overflow = "hidden";
	else
		document.body.style.overflow = "visible";
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

const setPageHandler = (state, action) => {
	return {
		...state,
		page: action.payload
	}
};

const setQueryHandler = (state, action) => {
	return {
		...state,
		query: {
			...state.query,
			...action.payload
		}
	}
};

function reducer(state, action) {
	switch (action.type) {
		case UPDATE_JOBS: return updateJobHandler(state, action);
		case UPDATE_LIMIT: return updateLimitHandler(state, action);
		case SWITCH_FILTER: return switchFilter(state, action);
		case SET_OPENED_JOB: return setOpenedJobHandler(state, action);
		case SET_PAGE: return  setPageHandler(state, action);
		case SET_QUERY: return  setQueryHandler(state, action);
		default: return state;
	}
}

export default reducer;