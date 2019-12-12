import React, {useContext} from 'react';
import Typography from "@material-ui/core/Typography";
import {CSSTransition} from 'react-transition-group';

import Spinner from "../Spinner/Spinner";

import AppContext from "../../contexts/appContext";

import './JobsList.scss';

const JobsList = (props) => {

	const {state} = useContext(AppContext);

	const animationCSSClassNames = {
		appear: 'show-appear',
		appearActive: 'show-active-appear',
		appearDone: 'show-done-appear',
		enter: 'show-enter',
		enterActive: 'show-active-enter',
		enterDone: 'show-done-enter',
		exit: 'show-exit',
		exitActive: 'show-active-exit',
		exitDone: 'show-done-exit',
	};

	return (
		<div className='jobs-list'>

			<CSSTransition
				in={state.isLoading}
				timeout={400}
				classNames={animationCSSClassNames}
				appear
				unmountOnExit
			>
				<div className='spinner-wrapper'>
					<Spinner />
				</div>
			</CSSTransition>

			<CSSTransition
				in={!!state.jobs.length && !state.isLoading}
				timeout={400}
				classNames={animationCSSClassNames}
				appear
				unmountOnExit
			>
				<div className='list-items-wrapper'>
					{props.children}
				</div>
			</CSSTransition>

			<CSSTransition
				in={!state.jobs.length && !state.isLoading && !state.isFirstLoad}
				timeout={400}
				classNames={animationCSSClassNames}
				appear
				unmountOnExit
			>
				<div className='nothing-found'>
					<Typography variant='h6'>
						Nothing found...
					</Typography>
				</div>
			</CSSTransition>

		</div>
	);
};

export default JobsList;
