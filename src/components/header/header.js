import React from 'react';
import PropTypes from 'prop-types';
import cl from 'classnames';
import header from './header.scss';
import button from '../../styles/_button.scss'
import icon from '../../styles/_icon.scss'
import {Link} from 'react-router-dom';
import config from '../../config';

const Header = ({hideCompletedIdeas, toggleCompletedIdeas, authed, logOut})=>{

    return (
		<header className={header.header}>
			{authed && (
				<nav className={header.nav}>
					<Link
						to={config.routes.addNewIdea}
						className={cl(header.button, header.buttonPrimary, button.withIcon)}>
						<svg className={icon.icon}>
							<use xlinkHref='#plus'/>
						</svg>
						<span>
							Create new
						</span>
					</Link>
				</nav>
			)
			|| (
				<nav className={header.nav}>
					<Link
						className={cl(header.button, header.buttonPrimary, button.withIcon)}
						to={config.routes.signup}>
						Sign up
					</Link>
				</nav>
			)}
			<Link className={header.title}
				to={config.routes.home}>Ideas
			</Link>

			{authed && (
				<nav className={cl(header.nav, header.navRight)}>
					<button
						className={cl(header.button, button.withIcon)}
						onClick={toggleCompletedIdeas}>
						<svg className={icon.icon}>
							<use xlinkHref={hideCompletedIdeas? '#toggle-on' : '#toggle-off'}/>
						</svg>

						Hide completed
					</button>

					<button
						className={cl(header.button, button.withIcon)}
						onClick={logOut}>
						<svg className={icon.icon}>
							<use xlinkHref='#exit'/>
						</svg>

						Logout
					</button>
				</nav>
			) || (
				<nav className={cl(header.nav, header.navRight)}>
					<Link
						className={cl(header.button, header.buttonPrimary)}
						to={config.routes.login}>
						Login
					</Link>
				</nav>
			)}
		</header>
    )
};

Header.propTypes = {
	authed: PropTypes.bool,
	hideCompletedIdeas: PropTypes.bool,
	toggleCompletedIdeas: PropTypes.func
};

export default Header;