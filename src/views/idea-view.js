import React from 'react';
import classnames from 'classnames';
import overlay from '../components/overlay/overlay';
import SingleIdea from '../components/single-idea/single-idea';


const IdeaView = ({idea, ...props})=>{
	return (
		<SingleIdea
			{...idea}
			{...props} />
	)
};

export default overlay(IdeaView);