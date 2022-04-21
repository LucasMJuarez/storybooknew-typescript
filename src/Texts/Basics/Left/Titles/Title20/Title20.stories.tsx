import React from 'react';
import Title from '.';

export default {
    title: 'Texts/Basics/Left/Titles/Title20',
    component: Title,
};

export const Title20 = (args: {text: string}) => <Title text={args.text} />;

Title20.argTypes = {
    text: {control: 'text'},
};

Title20.args = {
    text: 'My Super Test',
};
