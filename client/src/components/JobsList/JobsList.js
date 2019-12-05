import React from 'react';
import './JobsList.scss';

const JobsList = (props) => {
	return (
		<div className="jobs-list">
			{props.children}
		</div>
	);
};

export default JobsList;
