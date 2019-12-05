import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

import './JobModal.scss';

import JobThumbnail from "../JobThumbnail/JobThumbnail";

const FullJob = (props) => {

	return (
		<Dialog
			fullScreen
			className='job-full'
			open={props.open}
			onClose={props.clickClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title" disableTypography={true}>
				<JobThumbnail jobInfo={props.job}/>
			</DialogTitle>
			<DialogContent>
				<DialogContentText
					id="alert-dialog-description"
					className='job-full-description'
					dangerouslySetInnerHTML={{__html: props.job.description}}>
				</DialogContentText>
				<Divider/>
				<DialogContentText
					className='job-full-apply'
					dangerouslySetInnerHTML={{__html: props.job.how_to_apply}}>
				</DialogContentText>
			</DialogContent>
			<DialogActions className='job-full-actions'>
				<Button onClick={props.clickClose} color="primary">
					<i className="material-icons">keyboard_arrow_left</i>
					<span>Back</span>
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default FullJob;