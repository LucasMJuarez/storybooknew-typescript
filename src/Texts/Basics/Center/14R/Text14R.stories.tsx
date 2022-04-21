import React from 'react';
import Text14R from './Text14R';

export default {
    title: 'Texts/Basics/Center/Text14R',
    component: Text14R,
};

export const Text14RStory = (args: {text: string}) => (
        <Text14R text={args.text} />
);

Text14RStory.argTypes = {
    text: {control: 'text'},
};

Text14RStory.args = {
    text: 'Tenés',
};
