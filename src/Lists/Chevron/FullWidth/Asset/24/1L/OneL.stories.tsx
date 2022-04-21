import React from 'react';
import OneL from '.';
import {assetEnum} from '../../../../../../Assets/24/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Chevron/FullWidth/Asset/24/1L',
    component: OneL,
};

export const OneLStorie = (args: {text: string; onClick: Function; asset: assetEnum; hideLine?: boolean}) => (
    <OneL asset={args.asset} hideLine={args.hideLine} onClick={args.onClick} text={args.text} />
);

OneLStorie.argTypes = {
    text: {control: 'text'},
    hideLine: {control: 'boolean'},
};

OneLStorie.args = {
    text: 'My Super Test',
    onClick: () => alert('Hello There'),
    asset: 'Profile',
    hideLine: true,
};
