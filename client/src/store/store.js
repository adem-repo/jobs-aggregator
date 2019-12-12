import { limits } from "../const";

export const initialState = {
	jobs: [],

	isJobOpened: false,
	openedJob: null,

	isNext: false,
	isFilterOpen: false,

	isLoading: false,
	isFirstLoad: true,

	query: {
		page: 1,
		limit: limits[0],
		title: null,
		location: null,
		fullTime: null
	}
};