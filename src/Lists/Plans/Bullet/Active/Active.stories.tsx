import React from 'react';
import Active from './Active';
import {assetEnum} from './../../../../Assets/24/AssetOrchester/AssetOrchester';

export default {
    title: 'List/Plans/Bullet/Active',
    component: Active,
};

export const ActiveDefault = (args: {text: string; asset: assetEnum}) => <Active asset={args.asset} text={args.text} />;

ActiveDefault.argTypes = {
    text: {control: 'text'},
};

ActiveDefault.args = {
    text: 'please enter a text',
    asset: 'BulletActive',
};
