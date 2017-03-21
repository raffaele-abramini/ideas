import React from 'react';
import {Link} from 'react-router-dom';

import config from '../config';

export default ({idea})=>{
	return <div>
		<hr/>
		<h2>{idea.title}</h2>

		<p>
			{idea.content}
		</p>

		<Link to={config.routes.index}>Back</Link>
	</div>
}