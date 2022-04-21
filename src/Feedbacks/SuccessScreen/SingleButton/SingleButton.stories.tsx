import React from 'react';
import SingleButtonFeedback from './SingleButton';

export default {
    title: 'Feedbacks/SuccessScreen/SingleButton',
    component: SingleButtonFeedback,
};

export const SuccessFeedback = (args: {title: string; description: string; buttonLabel: string; onClick: Function}) => (
    <SingleButtonFeedback
        title={args.title}
        description={args.description}
        buttonLabel={args.buttonLabel}
        onClick={() => alert('My Super Success')}
    />
);

SuccessFeedback.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    buttonLabel: {control: 'text'},
};

SuccessFeedback.args = {
    title: 'My Success Message',
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non nobis nesciunt ipsum dolores, eligendi perferendis consectetur mollitia voluptatum quo voluptate quasi assumenda ducimus dignissimos debitis laudantium. Accusantium, nihil sapiente?',
    buttonLabel: 'Click me!',
};
