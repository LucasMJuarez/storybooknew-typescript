import React from 'react';
import First from './First';
import {assetEnum} from './../../../../Assets/24/AssetOrchester/AssetOrchester';

export default {
    title: 'List/Plans/Highlight/First',
    component: First,
};

export const FirstDefault = (args: {text: string; asset: assetEnum}) => <First asset={args.asset} text={args.text} />;

FirstDefault.argTypes = {
    text: {control: 'text'},
};

FirstDefault.args = {
    text: 'Hola que hace',
    asset: 'TestDrive',
};
