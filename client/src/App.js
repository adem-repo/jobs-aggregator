import React, {useContext} from 'react';
import Paper from "@material-ui/core/Paper";

import Header from "./components/Header/Header";
import JobsList from "./components/JobsList/JobsList";
import JobThumbnail from "./components/JobThumbnail/JobThumbnail";
import ListControls from "./components/ListControls/ListControls";
import FullJob from "./components/JobModal/JobModal";
import Overlay from "./components/Overlay/Overlay";

import {setOpenedJobAction} from './store/actions';
import {useJobs} from "./hooks/useJobsHook";
import AppContext from "./contexts/appContext";

import './App.scss';

const App = () => {

	const {state, dispatch} = useContext(AppContext);

	useJobs();

	let jobsComponents = [];
	if (state.jobs.length)
		jobsComponents = state.jobs.map(
			job => (
				<Paper className="job-list-item" key={job.id} onClick={() => {
					dispatch(setOpenedJobAction(job));
				}}>
					<JobThumbnail jobInfo={job}/>
				</Paper>
			)
		);

	let fullJob = null;
	if (state.openedJob)
		fullJob = <FullJob
			open={state.openedJob !== null}
			job={state.openedJob}
			clickClose={() => dispatch(setOpenedJobAction(null))}/>;

	return (
		<div className="app">
			<Header/>
			<JobsList>
				{jobsComponents}
			</JobsList>
			<ListControls/>
			{fullJob}
			<Overlay/>
		</div>
	);
};

export default App;
