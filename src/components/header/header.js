import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import header from './header.scss';
import button from '../../styles/_button.scss'
import icon from '../../styles/_icon.scss'
import {Link} from 'react-router-dom';
import config from '../../config';

const Header = ({hideCompletedIdeas, toggleCompletedIdeas})=>{

    return (
		<header className={header.header}>
			<Link
				to={config.routes.addNewIdea}
				className={cl(header.button,header.buttonPrimary, button.withIcon)}>
				<svg className={icon.icon}>
					<use xlinkHref='#plus'/>
				</svg>
				<span>
					Create new
				</span>
			</Link>
			<h1 className={header.title}>Ideas</h1>

			<nav className={header.filter}>
				<button
					className={cl(header.button, button.withIcon)}
					onClick={toggleCompletedIdeas}>
					<svg className={icon.icon}>
						<use xlinkHref={hideCompletedIdeas? '#toggle-on' : '#toggle-off'}/>
					</svg>

					Hide completed
				</button>
			</nav>
		</header>
    )
};

Header.propTypes = {
	hideCompletedIdeas: PropTypes.bool,
	toggleCompletedIdeas: PropTypes.func
};

export default Header;