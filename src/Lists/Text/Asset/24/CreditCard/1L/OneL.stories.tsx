import React from 'react';
import OneL from '.';
import {assetEnum} from '../../../../../../Assets/24/CreditCards/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Text/Asset/24/CreditCard/1L',
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
    text: 'CreditCard',
    asset: 'Mastercard',
    hideLine: true,
};
