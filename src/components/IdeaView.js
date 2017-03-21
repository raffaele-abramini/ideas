import React from 'react';

export default ({idea})=>{
	return <div>
		<hr/>
		<h2>{idea.title}</h2>

		<p>
			{idea.content}
		</p>
	</div>
}