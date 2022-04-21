import React from 'react';
import DualButtonFeedback from './DualButton';

export default {
    title: 'Feedbacks/InformativeScreen/2Button',
    component: DualButtonFeedback,
};

export const ErrorFeedback = (args: {
    title: string;
    description: string;
    labelPrimary: string;
    labelSecondary: string;
    onClickPrimary: Function;
    onClickSecondary: Function;
}) => <DualButtonFeedback {...args} />;

ErrorFeedback.args = {
    title: 'My Information Message',
    description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non nobis nesciunt ipsum dolores, eligendi perferendis consectetur mollitia voluptatum quo voluptate quasi assumenda ducimus dignissimos debitis laudantium. Accusantium, nihil sapiente?',
    labelPrimary: 'Primary Button',
    labelSecondary: 'Secondary Button',
    onClickPrimary: () => {
        alert('My Primary Button');
    },
    onClickSecondary: () => {
        alert('My Primary Button');
    },
};
