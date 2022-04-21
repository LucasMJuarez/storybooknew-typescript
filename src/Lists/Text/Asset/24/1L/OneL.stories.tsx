import React from 'react';
import OneL from '.';
import {assetEnum} from '../../../../../Assets/24/Flags/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Text/Asset/24/1L',
    component: OneL,
};

export const OneLStorie = (args: {text: string; asset: assetEnum; hideLine?: boolean}) => (
    <OneL asset={args.asset} hideLine={args.hideLine} text={args.text} />
);

OneLStorie.argTypes = {
    text: {control: 'text'},
    hideLine: {control: 'boolean'},
};

OneLStorie.args = {
    text: 'Country',
    asset: 'Pe',
    hideLine: true,
};
