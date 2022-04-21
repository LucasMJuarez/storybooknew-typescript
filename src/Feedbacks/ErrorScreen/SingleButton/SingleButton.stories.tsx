import React from 'react';
import SingleButtonFeedback from './';

export default {
    title: 'Feedbacks/ErrorScreen/SingleButton',
    component: SingleButtonFeedback,
};

export const ErrorFeedback = (args: {title: string; description: string; buttonLabel: string; onClick: Function}) => (
    <SingleButtonFeedback
        title={args.title}
        description={args.description}
        buttonLabel={args.buttonLabel}
        onClick={() => alert('My Super Error')}
    />
);

ErrorFeedback.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    buttonLabel: {control: 'text'},
};

ErrorFeedback.args = {
    title: 'My Error Message',
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non nobis nesciunt ipsum dolores, eligendi perferendis consectetur mollitia voluptatum quo voluptate quasi assumenda ducimus dignissimos debitis laudantium. Accusantium, nihil sapiente?',
    buttonLabel: 'Click me!',
};
