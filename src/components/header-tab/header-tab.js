import React from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import headerTab from './header-tab.scss';
import header from '../header/header.scss';
import iconClass from 'styles/_icon.scss';
import button from 'styles/_button.scss';
import u from 'styles/_utils.scss'


const HeaderTab = (data={})=>{
	const {icon, label} = data;
	return (Component)=>{
		return (props)=>{
			return (
				<div className={cl(headerTab.container, {[headerTab.isOpen] : props.isOpen})}>
					<button className={cl(
								header.button,
								button.withIcon,
								headerTab.trigger,
								u.marginRight,
								button.hiddenLabelOnMobile
							)}
							onClick={props.triggerFilter}>
						<svg className={iconClass.icon}>
							<use xlinkHref={`#${icon}`}/>
						</svg>
						<span>
							{label}
						</span>
					</button>
					<div className={headerTab.tab}>
						<Component {...props}/>
					</div>
				</div>
			)
		};
	}
}

export default HeaderTab;