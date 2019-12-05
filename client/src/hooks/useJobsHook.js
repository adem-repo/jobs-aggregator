import {useEffect, useContext} from "react";
import axios from "axios";
import JobContext from "../contexts/jobContext";

export function useJobs(query) {
	const {state, dispatch} = useContext(JobContext);
	const baseURL = 'http://localhost:3020';

	useEffect(() => {
		axios.get(baseURL + query).then(
			response => {
				const {jobs, isNext} = response.data;
				dispatch({type: 'UPDATE', payload: {jobs, isNext}});
			}
		);
	}, [query, dispatch]);

	return state
}