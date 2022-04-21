import React from 'react';
import Title from '.';

export default {
    title: 'Texts/Basics/Left/Titles/Title24',
    component: Title,
};

export const Title24 = (args: {text: string}) => <Title text={args.text} />;

Title24.argTypes = {
    text: {control: 'text'},
};

Title24.args = {
    text: 'My Super Test',
};
