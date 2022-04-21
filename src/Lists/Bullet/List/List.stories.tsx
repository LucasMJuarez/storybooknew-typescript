import React from 'react';
import List from './List';

export default {
    title: 'Lists/Bullet/List',
    component: List,
};

export const ActiveDefault = (args: {text: string}) => <List text={args.text} />;

ActiveDefault.argTypes = {
    text: {control: 'text'},
};

ActiveDefault.args = {
    text: 'please enter a text',
};
