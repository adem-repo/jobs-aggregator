import {useEffect, useContext} from "react";
import axios from "axios";

import AppContext from "../contexts/appContext";
import {updateJobsAction, setLoadingStatus} from '../store/actions'

export function useJobs() {
	const {state, dispatch} = useContext(AppContext);
	const apiURL = 'http://localhost:3020/?';
	let queryStr = Object.keys(state.query)
		.reduce((totalQuery, key, i, arr) => {
			if (state.query[key]) {
				let parameter = `${key}=${state.query[key]}`;
				return `${totalQuery}${parameter}&`
			}
			return totalQuery
		}, apiURL);

	useEffect(() => {
		dispatch(setLoadingStatus(true));
		axios.get(queryStr).then(
			response => {
				dispatch(setLoadingStatus(false));
				const {jobs, isNext} = response.data;
				dispatch(updateJobsAction({jobs, isNext}));
			}
		);
	}, [queryStr, dispatch]);

	return state
}