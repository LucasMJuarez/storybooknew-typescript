import React from 'react';
import Highlight from '.';

export default {
    title: 'Labels/NoBackground/Highlight',
    component: Highlight,
};

export const HighlightStory = (args: {text: string}) => <Highlight text={args.text} />;

HighlightStory.argTypes = {
    text: {control: 'text'},
}; 

HighlightStory.args = {
    text: 'My Super Test',
};