import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import overlay from './overlay.scss';
import icon from '../../styles/_icon.scss';
import config from '../../config';

const Overlay= (Component)=>{
	return (props)=>(
		<div className={overlay.overlay}>
			<div className={overlay.inner}>
				<Link className={overlay.close} to={config.routes.list}>
					<svg className={icon.icon}>
						<use xlinkHref="#cross"></use>
					</svg>
				</Link>
				<Component {...props} />
			</div>
		</div>
	)
};

Overlay.propTypes = {};

export default Overlay;