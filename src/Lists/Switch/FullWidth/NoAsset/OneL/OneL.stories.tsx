import React from 'react';
import OneL from '.';

export default {
    title: 'Lists/Switch/FullWidth/NoAsset/1L',
    component: OneL,
};

export const OneLStorie = (args: {title: string; secondary: string; showLine?: boolean; }) => 
<OneL secondary={args.secondary} title={args.title} showLine={args.showLine} />;

OneLStorie.argTypes = {
    title: {control: 'text'},
    secondary: {control: 'text'},
    showLine: {control: 'boolean'},
};

OneLStorie.args = {
    title: 'My Super Test',
    secondary: 'Mes 1',
    showLine: false,
};
