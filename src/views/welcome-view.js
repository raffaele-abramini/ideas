import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../components/hero-banner/hero-banner';
import layout from '../styles/_layout.scss';

const WelcomeView = ({})=>{
	if(global && global.document) global.document.title = 'Welcome | Ideas';

    return (
        <div className={layout.innerContainer}>
			<Hero/>
			<div className={layout.centralColumn}>
				<h2 style={{marginTop: '3rem'}}>Get some ideas</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet in minima tempora ut veritatis? Adipisci asperiores at impedit, minima nemo nihil placeat quisquam repellat? Commodi eum illo magnam quibusdam quisquam!</p>
				<br/>

				<h2>Get some other ideas</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet in minima tempora ut veritatis? Adipisci asperiores at impedit, minima nemo nihil placeat quisquam repellat? Commodi eum illo magnam quibusdam quisquam!</p>
				<br/>

				<h2>Get some other ideas</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet in minima tempora ut veritatis? Adipisci asperiores at impedit, minima nemo nihil placeat quisquam repellat? Commodi eum illo magnam quibusdam quisquam!</p>
			</div>
		</div>
    )
};

WelcomeView.propTypes = {};

export default WelcomeView;