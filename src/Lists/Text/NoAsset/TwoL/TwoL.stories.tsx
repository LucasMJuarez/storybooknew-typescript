import React from 'react';
import TwoL from './TwoL';

export default {
    title: 'Lists/Text/NoAsset/2L',
    component: TwoL,
};

export const TwoLStorie = (args: {title: string; hideLine?: boolean; secondary: string}) => (
    <TwoL title={args.title} secondary={args.secondary} hideLine={args.hideLine} />
);

TwoLStorie.argTypes = {
    title: {control: 'text'},
    secondary: {control: 'text'},
    hideLine: {control: 'boolean'},
};

TwoLStorie.args = {
    title: 'My Super Test',
    secondary: 'Vence el 26 oct',
    hideLine: true,
};
