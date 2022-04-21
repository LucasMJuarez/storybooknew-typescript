import React from 'react';
import TextArea from './TextArea';
import {Props} from './TextArea';

export default {
    title: 'InputFields/TextArea',
    component: TextArea,
};

export const TextAreaStory = (args: Props) => <TextArea {...args}/>;

TextAreaStory.args = {
    children: 'Signature here',
    onClick: () => alert('Funciono OK')
}
