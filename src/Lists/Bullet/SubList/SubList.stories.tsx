import React from 'react';
import SubList from './SubList';

export default {
    title: 'Lists/Bullet/SubList',
    component: SubList,
};

export const ActiveDefault = (args: {text: string}) => <SubList text={args.text} />;

ActiveDefault.argTypes = {
    text: {control: 'text'},
};

ActiveDefault.args = {
    text: 'please enter a text',
};
