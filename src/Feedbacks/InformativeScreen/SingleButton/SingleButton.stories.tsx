import React from 'react';
import SingleButtonFeedback from './';

export default {
    title: 'Feedbacks/InformativeScreen/SingleButton',
    component: SingleButtonFeedback,
};

export const InformativeScreen = (args: {
    title: string;
    description: string;
    buttonLabel: string;
    onClick: Function;
}) => (
    <SingleButtonFeedback
        title={args.title}
        description={args.description}
        buttonLabel={args.buttonLabel}
        onClick={() => alert('My Super Informative Click')}
    />
);

InformativeScreen.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    buttonLabel: {control: 'text'},
};

InformativeScreen.args = {
    title: 'Informative message',
    description: 'Permítenos acceder a los contactos de este dispositivo para conversar con tus contactos.',
    buttonLabel: 'Primary Button',
};
