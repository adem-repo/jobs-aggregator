import React, {useContext, useState} from 'react';
import cx from 'classnames';
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {CSSTransition} from "react-transition-group";

import AppContext from '../../contexts/appContext';
import {switchFilterAction, setQueryAction} from "../../store/actions";

import './Header.scss';

const Header = () => {

	const {state: {isFilterOpen}, dispatch} = useContext(AppContext);
	const [formFieldsState, setFormFieldsState] = useState({
		fullTime: false,
		location: '',
		title: '',
	});

	const headerCSSClasses = cx({
		header: true,
		opened: isFilterOpen
	});

	const filterCSSClasses = cx({
		filter: true,
	});

	const changeInputHandler = name => ({target: {value}}) => {
		setFormFieldsState({
			...formFieldsState,
			[name]: value
		})
	};

	const changeCheckboxHandler = name => ({target: {checked, value}}) => {
		setFormFieldsState({
			...formFieldsState,
			[name]: checked
		});
	};

	const handleConfirm = () => {
		if (formFieldsState.location || formFieldsState.title || formFieldsState.fullTime) {
			dispatch(switchFilterAction(false));
			dispatch(setQueryAction({...formFieldsState, page: 1}));
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleConfirm();
		}
	};

	const animationClassPrefix = 'title-anim';

	const animationCSSClassNames = {
		appear: `${animationClassPrefix}-appear`,
		appearActive: `${animationClassPrefix}-active-appear`,
		appearDone: `${animationClassPrefix}-done-appear`,
		enter: `${animationClassPrefix}-enter`,
		enterActive: `${animationClassPrefix}-active-enter`,
		enterDone: `${animationClassPrefix}-done-enter`,
		exit: `${animationClassPrefix}-exit`,
		exitActive: `${animationClassPrefix}-active-exit`,
		exitDone: `${animationClassPrefix}-done-exit`,
	};

	return (
		<div className={headerCSSClasses}>
			<div className="header-top">
				<div className="title">
					<CSSTransition
						in={!isFilterOpen}
						timeout={400}
						classNames={animationCSSClassNames}
						appear
						unmountOnExit
					>
						<Typography variant="subtitle1" className='title-common'>
							Jobs Aggregator
						</Typography>
					</CSSTransition>
					<CSSTransition
						in={isFilterOpen}
						timeout={400}
						classNames={animationCSSClassNames}
						appear
						unmountOnExit
					>
						<Typography variant="subtitle1" className='title-filter'>
							Filter
						</Typography>
					</CSSTransition>
				</div>
				<div className="sort" onClick={() => dispatch(switchFilterAction(!isFilterOpen))}>
					<div>{null}</div>
					<div>{null}</div>
					<div>{null}</div>
				</div>
			</div>
			<div className={filterCSSClasses}>
				<TextField
					id="standard-search"
					label="Title"
					type="search"
					value={formFieldsState.title}
					onChange={changeInputHandler('title')}
					onKeyPress={handleKeyPress}
				/>
				<TextField
					id="standard-search"
					label="Location"
					type="search"
					value={formFieldsState.location}
					onChange={changeInputHandler('location')}
					onKeyPress={handleKeyPress}
				/>
				<FormControlLabel
					value="start"
					control={<Checkbox
						checked={formFieldsState.fullTime}
						onChange={changeCheckboxHandler('fullTime')}
						inputProps={{
							'aria-label': 'secondary checkbox',
						}}
						color="primary"
					/>}
					label="Full time"
				/>
				<Button variant="outlined" color="primary" onClick={handleConfirm}>
					Search
				</Button>
			</div>
		</div>
	);
};

export default Header;