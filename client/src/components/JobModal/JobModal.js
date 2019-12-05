import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from "@material-ui/core/Typography";

import Link from "@material-ui/core/Link";

import Job from "../Job/Job";

const FullJob = (props) => {

	const companyElement = () => {
		const companyLogo =
			props.job.company_logo ?
				<img className='company-logo' src={props.job.company_logo} alt=""/> :
				null;
		// const companyTitle =
		// 	jobInfo.company ?
		// 		<Typography
		// 			variant="subtitle2"
		// 			component='span'
		// 		>
		// 			{jobInfo.company}
		// 		</Typography> :
		// 		null;
		const companyUrl = props.job.company_url ? props.job.company_url : undefined;
		return (
			<div className="company">
				<Link href={companyUrl}>
					{companyLogo}
				</Link>
			</div>

		);
	};

	const [weekday, month, day] = props.job.created_at.split(' ');
	const dateStr = [weekday, month, day].join(' ');

	return (
		<div>
			<Dialog
				fullScreen
				open={props.open}
				onClose={props.clickClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title" disableTypography={true}>
					{/*<div className='modal-title-top'>*/}
					{/*	<Typography variant='h5' className='job-modal-title'>*/}
					{/*		{props.job.title}*/}
					{/*	</Typography>*/}
					{/*</div>*/}
					{/*<div className="modal-title-bottom">*/}
					{/*	{companyElement()}*/}
					{/*	<Typography variant="subtitle1">*/}
					{/*		{props.job.type}*/}
					{/*	</Typography>*/}
					{/*	<Typography variant="subtitle1">*/}
					{/*		{dateStr}*/}
					{/*	</Typography>*/}
					{/*</div>*/}
					<Job jobInfo={props.job}/>
				</DialogTitle>
				<DialogContent>
					<DialogContentText
						id="alert-dialog-description"
						dangerouslySetInnerHTML={{__html: props.job.description}}
					></DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.clickClose} color="primary">
						Decline
					</Button>
					<Button onClick={props.clickClose} color="primary" autoFocus>
						Apply
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default FullJob;