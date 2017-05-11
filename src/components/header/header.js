import React from 'react';
import PropTypes from 'prop-types';
import header from './header.scss';

const Header = ({})=>{
    return (
		<header className={header.header}>
			<h1 className={header.title}>Ideas</h1>
		</header>
    )
};

Header.propTypes = {};

export default Header;