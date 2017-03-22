import React from 'react';
import {Link} from 'react-router-dom';

import config from '../config';

export default ({idea, id})=>{
	return <div>
		<hr/>
		<h2>{idea.title}</h2>

		<p>
			{idea.content}
		</p>

		<Link to={config.routes.index}>Back</Link>
		<Link to={config.routes.editIdea(id)}>Edit</Link>
	</div>
}