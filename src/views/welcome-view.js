import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../components/hero-banner/hero-banner';
import layout from '../styles/_layout.scss';

const WelcomeView = ({})=>{
	if(global && global.document) global.document.title = 'Welcome | Ideas';

    return (
        <div className={layout.innerContainer}>
			<Hero/>
			<div className={layout.threeColsOnTablet} style={{margin: '2rem 0'}}>
				<div className={layout.paddedColumn}>
					<h2>Free todo list!</h2>
					<p>Create a free account and store you todo list and ideas.</p>
				</div>

				<div className={layout.paddedColumn}>
					<h2>PWA ready</h2>
					<p>Check your lists everywhere and on every device you want without installing any app.</p>
				</div>

				<div className={layout.paddedColumn}>
					<h2>Enhancements on going</h2>
					<p>New features are coming! Get automatically and for free all the treats!</p>
				</div>
			</div>
			<div style={{padding : '1rem', background: 'slateblue', color: 'white'}}>
				<h2>Important disclaimer!</h2>
				<p>This is a free proof of concept. The data stored in here maybe deleted or seen by the dev team. Please DON'T STORE ANY SENSIBLE INFORMATION. We don't take responsibilities for data lost, theft or anything else.</p>
			</div>
		</div>
    )
};

WelcomeView.propTypes = {};

export default WelcomeView;