import React, { useReducer, useState} from 'react';
import './App.scss';

import JobsList from "./components/JobsList/JobsList";
import JobThumbnail from "./components/JobThumbnail/JobThumbnail";
import ListControls from "./components/ListControls/ListControls";
import FullJob from "./components/JobModal/JobModal";

import JobContext from "./contexts/jobContext";
import Paper from "@material-ui/core/Paper";

function jobsReducer(state, {type, payload: {jobs, isNext}}) {
	switch (type) {
		case 'UPDATE':
			return {jobs, isNext};
		default:
			return state;
	}
}

const App = () => {

	const [openJob, setOpenJob] = useState(false);
	const [openedJob, setOpenedJob] = useState(null);
	const [state, dispatch] = useReducer(jobsReducer, {
		jobs: [],
		isNext: false
	});

	let jobsComponents = [];
	if (state.jobs.length)
		jobsComponents = state.jobs.map(
			job => (
				<Paper className="job-list-item" onClick={() => {
					setOpenJob(true);
					setOpenedJob(job);
				}}>
					<JobThumbnail key={job.id} jobInfo={job}/>
				</Paper>
			)
		);

	let fullJob = null;
	if (openedJob)
	    fullJob = <FullJob
            open={openJob}
            job={openedJob}
            clickClose={() => setOpenJob(false)}/>


	return (
		<div className="app">
			{/*<Header />*/}
			<JobsList>
				{jobsComponents}
			</JobsList>
			<JobContext.Provider value={{state, dispatch}}>
				<ListControls/>
			</JobContext.Provider>
            {fullJob}
		</div>
	);
};

export default App;
