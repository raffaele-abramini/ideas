import React, {Component} from 'react';
import PropTypes from 'prop-types';
import hero from './hero-banner.scss';

class HeroBanner extends Component {
    render(){
        return (
            <div className={hero.banner}>
				<h1 className={hero.title}>
					Ideas!
				</h1>
			</div>
        )
    }
    
    static propTypes = {};
}

export default HeroBanner