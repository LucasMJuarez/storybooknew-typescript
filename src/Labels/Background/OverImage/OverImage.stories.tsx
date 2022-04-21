import React from 'react';
import OverImage from '.';

export default {
    title: 'Labels/Background/OverImage',
    component: OverImage,
};

export const OverImageStory = (args: { text: string }) => <OverImage text={args.text} />;

OverImageStory.argTypes = {
    text: { control: 'text' },
};

OverImageStory.args = {
    text: 'ULTIMOS DÍAS',
};