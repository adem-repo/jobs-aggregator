import React from 'react';

import Search from "../Search/Search";

import './Header.scss';

const Header = props => {
	return (
		<div className='header'>
			<Search/>
			<div className="sort">
				<i className="material-icons">
					sort
				</i>
			</div>
		</div>
	);
};

export default Header;