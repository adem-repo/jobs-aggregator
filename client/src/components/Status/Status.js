import React, {useContext} from 'react';
import Typography from "@material-ui/core/Typography";

import Spinner from "../Spinner/Spinner";

import AppContext from "../../contexts/appContext";

import './Status.scss';

const Status = props => {

	const {state} = useContext(AppContext);

	const nothingFound = (
		<div className="nothing-found">
			<Typography variant='h6'>
				Nothing found...
			</Typography>
		</div>
	);

	const spinner = (
		<div className="spinner-wrapper">
			<Spinner />
		</div>
	);

	let toDisplay = null;

	switch (true) {
		case state.isLoading:
			toDisplay = spinner;
			break;
		case state.jobs.length === 0:
			toDisplay = nothingFound;
			break;
		default:
			toDisplay = props.children
	}

	return (
		<div className='status'>
			{toDisplay}
		</div>
	);
};

export default Status;