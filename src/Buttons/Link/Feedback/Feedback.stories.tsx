import React from 'react';
import Feedback, { FeedbackProps } from './Feedback';

export default {
    title: 'Buttons/3.Link/feedback',
    component: Feedback,
};

export const Normal = (args: FeedbackProps) => <Feedback {...args} />;

Normal.args = {
    text: 'Feedback normal text',
    disabled: false,
    onClick: () => alert('Link Pressed'),
};
export const Disabled = (args: FeedbackProps) => <Feedback {...args} />;

Disabled.args = {
    text: 'Feedback disabled',
    disabled: true,
};
