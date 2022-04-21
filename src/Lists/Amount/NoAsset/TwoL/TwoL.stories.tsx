import React from 'react';
import TwoL from './TwoL';
import { Props } from './TwoL';

export default {
    title: 'Lists/Amount/NoAsset/2L',
    component: TwoL,
};

export const TwoLStorie = (args: Props) => 
<TwoL amount={args.amount} title={args.title} secondary={args.secondary} hideLine={args.hideLine} />;

TwoLStorie.argTypes = {
    title: {control: 'text'},
    secondary : { controle : 'text' },
    amount: {control: 'number'},
    hideLine: {control: 'boolean'},
};

TwoLStorie.args = {
    title: 'My Super Test',
    secondary : 'Vence el 26 oct',
    amount: 33,
    hideLine: false
};
