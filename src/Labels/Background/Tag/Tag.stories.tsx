import React from 'react';
import TagComponent from '.';

export default {
    title: 'Labels/Background/Tag',
    component: TagComponent,
};

export const Tag = (args: { text: string }) => <TagComponent text={args.text} />;

Tag.argTypes = {
    text: { control: 'text' },
};

Tag.args = {
    text: '5 GB',
};