import React, {Suspense} from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Img from "../Img/Img";
import './Job.scss';

const Job = (props) => {

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
		// const companyUrl = jobInfo.company_url ? jobInfo.company_url : undefined;
		return (
			<span className='company'>
				at {companyLogo ? companyLogo : companyTitle ? companyTitle : null}
			</span>
		);
	};

	const [weekday, month, day] = jobInfo.created_at.split(' ');
	const dateStr = [weekday, month, day].join(' ');

	// const description = <Typography variant='body1' dangerouslySetInnerHTML={{__html: jobInfo.description}}></Typography>

	// const location = jobInfo.location ?
	// 	<Typography variant='button' component='span' className='location'>
	// 		{jobInfo.location}
	// 	</Typography> :
	// 	null;

	return (
		<React.Fragment>
			<div className="job-top">
				<Typography variant="h4" component='span' className='job-title'>
					{jobInfo.title}
				</Typography>

				<Typography variant="h6" component='span' className='job-type'>
					{jobInfo.type}
				</Typography>
			</div>
			<Typography variant="h6" component='span' className='job-location'>
				{jobInfo.location}
			</Typography>
			<div className="job-bottom">
				{companyElement()}
				<Typography variant="subtitle2" component='span' className='job-date'>
					{dateStr}
				</Typography>
			</div>
		</React.Fragment>
	);
};

export default Job;
