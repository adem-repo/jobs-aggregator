import React, { useState, useEffect, useRef } from 'react';
import cx from 'classnames';

import './Search.scss';

const Search = props => {

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const elementRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const classes = cx({
		'search': true,
		open
	});

	const clickOutsideHandler = (event) => {
		if (elementRef.current && !elementRef.current.contains(event.target))
			setOpen(false);
	};

	useEffect(() => {
		document.addEventListener("mousedown", clickOutsideHandler);
		return () => {
			document.removeEventListener("mousedown", clickOutsideHandler);
		};
	});

	useEffect(() => {
		const node = inputRef.current;
		node && node.focus();
	}, [open]);

	const openHandler = () => {
		setOpen(true);
	};

	const eraseHandler = () => {
		if (value)
			setValue('');
		else
			setOpen(false);
	};

	return (
		<div className={classes} ref={elementRef}>
			<div className='search-icon' onClick={openHandler}>
				<i className="material-icons" onClick={() => {}}>
					search
				</i>
			</div>
			<input
				className='search-field'
				type="text"
				ref={inputRef}
				onChange={({target: {value}}) => setValue(value)}
				value={value}
			/>
			<div className='erase-icon' onClick={eraseHandler}>
				<i className="material-icons">
					clear
				</i>
			</div>
		</div>
	);
};

export default Search;