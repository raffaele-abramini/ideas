import React from 'react';
import PropTypes from 'prop-types';
import overlay from './overlay.scss';


const Overlay= (Component)=>{
	return (props)=>(
		<div className={overlay.overlay}>
			<Component {...props} />
		</div>
	)
};

Overlay.propTypes = {};

export default Overlay;