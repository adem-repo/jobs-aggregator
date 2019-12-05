import React, {useState} from 'react';
import cx from 'classnames';
import './Img.scss';

const Img = props => {

	const [isLoading, setIsLoading] = useState(true);
	const classes = cx({
		'image-wrapper': true,
		loading: isLoading
	});

	return (
		<div className={classes}>
			<div className="curtain">{null}</div>
			<img {...props} onLoad={() => setIsLoading(false)} alt=""/>
		</div>
	)
};

export default Img;