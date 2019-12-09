import React, {useContext} from 'react';
import cx from 'classnames';

import AppContext from "../../contexts/appContext";
import { switchFilterAction } from "../../store/actions";

import './Overlay.scss';

const Overlay = () => {

	const {state: { isFilterOpen }, dispatch} = useContext(AppContext);

	const overlayCSSClassNames = cx({
		overlay: true,
		open: isFilterOpen
	});

	const handleClick = () => {
		dispatch(switchFilterAction(false))
	};

	return (
		<div
			className={overlayCSSClassNames}
			onClick={handleClick}
		>
		</div>
	);
};

export default Overlay;