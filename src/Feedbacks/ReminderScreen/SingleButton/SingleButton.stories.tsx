import React from 'react';
import SingleButtonFeedback from './';

export default {
    title: 'Feedbacks/ReminderScreen/SingleButton',
    component: SingleButtonFeedback,
};

export const ReminderScreen = (args: {
    title: string;
    description: string;
    buttonLabel: string;
    onClick: Function;
}) => (
    <SingleButtonFeedback
        title={args.title}
        description={args.description}
        buttonLabel={args.buttonLabel}
        onClick={() => alert('My Super Reminder Click')}
    />
);

ReminderScreen.argTypes = {
    title: { control: 'text' },
    description: { control: 'text' },
    buttonLabel: { control: 'text' },
};

ReminderScreen.args = {
    title: 'Reminder message',
    description: 'Permítenos acceder a los contactos de este dispositivo para conversar con tus contactos.',
    buttonLabel: 'Primary Button',
};
