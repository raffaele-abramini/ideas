import React from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import headerTab from './header-tab.scss';

const HeaderTab = (Component)=>{
	return (props)=>{
		return (
			<div className={cl({[headerTab.isOpen] : props.isOpen})}>
				<div className={headerTab.trigger} onClick={props.triggerFilter}>
					trigger
				</div>
				<div className={headerTab.tab}>
					<Component {...props}/>
				</div>
			</div>
		)
	};
}

export default HeaderTab;