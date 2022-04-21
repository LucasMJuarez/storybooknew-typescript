import React from 'react';
import TitleServiceError from './TitleServiceError';

export default {
    title: 'Resources/ServiceError/TitleServiceError',
    component: TitleServiceError,
};

export const TitleServiceErrorStory = (args: {text: string}) => (
        <TitleServiceError text={args.text} />
);

TitleServiceErrorStory.argTypes = {
    text: {control: 'text'},
};

TitleServiceErrorStory.args = {
    text: 'Tenés',
};

