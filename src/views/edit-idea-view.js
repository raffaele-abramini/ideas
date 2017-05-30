import React from 'react';
import EditIdeaContainer from '../containers/edit-idea-form';


const EditIdeaView = ({idea, ...props})=>{
	return (
		<div>
			<EditIdeaContainer
				{...idea}
				{...props} />
		</div>
	)
};

export default EditIdeaView;