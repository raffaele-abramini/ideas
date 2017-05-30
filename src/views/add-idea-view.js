import React from 'react';
import AddIdeaContainer from '../containers/add-idea-form';


const AddIdeaView = ({idea, ...props})=>{
	return (
		<div>
			<AddIdeaContainer
				{...idea}
				{...props} />
		</div>
	)
};

export default AddIdeaView;