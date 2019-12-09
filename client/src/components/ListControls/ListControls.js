import React, { useContext } from 'react';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import AppContext from '../../contexts/appContext';
import { limits } from "../../const";
import { setQueryAction } from "../../store/actions";

import './ListControls.scss';

const ListControls = () => {

	const {
		state: {
			query: {
				page, limit
			},
			isNext,
			isLoading,
		}, dispatch} = useContext(AppContext);

	const goBack = () => {
		if (page <= 1)
			return;
		const newPage = page - 1;
		dispatch(setQueryAction({page: newPage}));
	};

	const goForward = () => {
		const newPage = page + 1;
		dispatch(setQueryAction({page: newPage}));
	};

	const handleLimitChange = (event) => {
		dispatch(setQueryAction({
			limit: +event.target.value,
			page: 1
		}));
	};

	return (
		<div className='list-controls'>

			<Button onClick={goBack} disabled={page <= 1  || isLoading}>
				<i className="material-icons">keyboard_arrow_left</i>
				<span>Prev</span>
			</Button>

			<FormControl className='count-select'>
				<InputLabel id="demo-simple-select-label">Jobs on page</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={limit}
					onChange={handleLimitChange}
				>
					{limits.map( el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
				</Select>
			</FormControl>

			<Button onClick={goForward} disabled={!isNext || isLoading}>
				<span>Next</span>
				<i className="material-icons">keyboard_arrow_right</i>
			</Button>

		</div>
	);
};

export default ListControls;