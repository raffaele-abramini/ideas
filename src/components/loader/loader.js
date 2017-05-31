import React from 'react';
import PropTypes from 'prop-types';
import loader from './loader.scss';
import cl from 'classnames';

const Loader = ({isVisible, message})=>{
    return (
        <div className={cl(loader.loader, {
        	[loader.isVisible] : isVisible
		})}>
			<div className={loader.text}>
				{message}
			</div>
		</div>
    )
};

Loader.propTypes = {
	isVisible: PropTypes.bool,
	message: PropTypes.string,
};

export default Loader;