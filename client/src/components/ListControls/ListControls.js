import React, {useState, useContext} from 'react';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import './ListControls.scss';
import {useJobs} from "../../hooks/useJobsHook";
import JobContext from '../../contexts/jobContext';

const ListControls = () => {

	const limits = [20, 50, 100];
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(limits[0]);
	const {state} = useContext(JobContext);

	useJobs(`?page=${page}&limit=${limit}`);

	const goBack = () => {
		if (page <= 1)
			return;
		const newPage = page - 1;
		setPage(newPage);
	};

	const goForward = () => {
		const newPage = page + 1;
		setPage(newPage);
	};

	const handleChange = (event) => {
		setLimit(+event.target.value);
		setPage(1);
	};

	return (
		<div className='list-controls'>

			<Button onClick={goBack} disabled={page<=1}>
				<i className="material-icons">keyboard_arrow_left</i>
				<span>Back</span>
			</Button>

			<FormControl className='count-select'>
				<InputLabel id="demo-simple-select-label">Jobs on page</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={limit}
					onChange={handleChange}
				>
					{limits.map( el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
				</Select>
			</FormControl>

			<Button onClick={goForward} disabled={!state.isNext}>
				<span>Next</span>
				<i className="material-icons">keyboard_arrow_right</i>
			</Button>

		</div>
	);
};

export default ListControls;