import React from 'react';
import Title from './Title16';

export default {
    title: 'Texts/Basics/Left/Titles/Title16',
    component: Title,
};

export const Title16 = (args: {text: string}) => <Title text={args.text} />;

Title16.argTypes = {
    text: {control: 'text'},
};

Title16.args = {
    text: 'My Super Test',
};
