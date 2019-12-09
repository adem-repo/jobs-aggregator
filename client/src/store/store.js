import { limits } from "../const";

export const initialState = {
	jobs: [],

	isJobOpened: false,
	openedJob: null,

	isNext: false,
	isFilterOpen: false,

	query: {
		page: 1,
		limit: limits[0],
		type: null,
		location: null,
		fullTime: null
	}
};