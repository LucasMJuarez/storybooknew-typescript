import React from 'react';
import OneL from './OneL';
import {assetEnum} from '../../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Text/Asset/40/1L',
    component: OneL,
};

export const OneLStory = (args: {primaryText: string; onClick: Function; asset: assetEnum; hideLine?: boolean}) => (
    <OneL asset={args.asset} onClick={args.onClick} text={args.primaryText} hideLine={args.hideLine} />
);

OneLStory.argTypes = {
    text: {control: 'text'},
};

OneLStory.args = {
    primaryText: 'Añadir número o cuenta',
    onClick: () => alert('Hello There'),
    asset: 'Add',
};
