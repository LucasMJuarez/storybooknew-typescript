import React from 'react';
import ThreeLink from './ThreeLink';

export default {
    title: 'Buttons/3.Link/FullWidth',
    component: ThreeLink,
};

export const ThreeLinkStorie = (args: {
    title: string; 
    hideLine?: boolean; 
    tabIndex?: number;
    onKeyPress?: React.KeyboardEventHandler
}) => (
    <ThreeLink 
    title={args.title} 
    onClick={() => alert('It works!!!')} 
    hideLine={args.hideLine} 
    tabIndex={args.tabIndex}
    onKeyPress={args.onKeyPress}
    />
);

ThreeLinkStorie.argTypes = {
    title: {control: 'text'},
    hideLine: {control: 'boolean'},
};

ThreeLinkStorie.args = {
    title: 'My Super Test',
    hideLine: true,
    tabIndex: 0,
    onKeyPress: () => alert('Hello keypress'),
};
