import React from 'react';
import Title from '.';

export default {
    title: 'Texts/Basics/Left/Titles/Title14M',
    component: Title,
};

export const Title14M = (args: {text: string}) => <Title text={args.text} />;

Title14M.argTypes = {
    text: {control: 'text'},
};

Title14M.args = {
    text: 'My Super Test',
};
