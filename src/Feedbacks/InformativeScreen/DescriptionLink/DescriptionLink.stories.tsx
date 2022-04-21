import React from 'react';
import DescriptionLink from './DescriptionLink';

export default {
    title: 'Feedbacks/InformativeScreen/DescriptionLink',
    component: DescriptionLink,
};

export const DescriptionLinkScreen = (args: {
    title: string;
    description: string;
    descriptionOnClick: Function;
    buttonLabel: string;
    onClick: Function;
}) => (
    <DescriptionLink
        title={args.title}
        description={args.description}
        descriptionOnClick={() => alert('My Super Link Click')}
        buttonLabel={args.buttonLabel}
        onClick={() => alert('My Super Button Click')}
    />
);

DescriptionLinkScreen.argTypes = {
    title: {control: 'text'},
    description: {control: 'text'},
    buttonLabel: {control: 'text'},
};

DescriptionLinkScreen.args = {
    title: 'Title that explain situation',
    description: 'Posible causes',
    buttonLabel: 'Primary Button',
};
