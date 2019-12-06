import React from 'react';
import Typography from "@material-ui/core/Typography";

import Img from "../Img/Img";
import './JobThumbnail.scss';

const JobThumbnail = (props) => {

	const {jobInfo} = props;

	const companyElement = () => {
		const companyLogo =
			jobInfo.company_logo ?
				<Img className='company-logo' src={jobInfo.company_logo} alt=""/> :
				null;
		const companyTitle =
			jobInfo.company ?
				<Typography
					variant="subtitle2"
					component='span'
					className='company-title'
				>
					{jobInfo.company}
				</Typography> :
				null;
		return (
			<span className='company'>
				<span>at</span>{companyLogo ? companyLogo : companyTitle ? companyTitle : null}
			</span>
		);
	};

	const [weekday, month, day] = jobInfo.created_at.split(' ');
	const dateStr = [weekday, month, day].join(' ');

	return (
		<div className='job-thumbnail'>
			<div className="job-thumbnail-top">
				<Typography variant="h6" component='span' className='job-thumbnail-title'>
					{jobInfo.title}
				</Typography>
				<Typography variant="subtitle1" component='span' className='job-thumbnail-type'>
					{jobInfo.type}
				</Typography>
			</div>
			<Typography variant="subtitle1" component='span' className='job-thumbnail-location'>
				{jobInfo.location}
			</Typography>
			<div className="job-thumbnail-bottom">
				{companyElement()}
				<Typography variant="subtitle2" component='span' className='job-thumbnail-date'>
					{dateStr}
				</Typography>
			</div>
		</div>
	);
};

export default JobThumbnail;
