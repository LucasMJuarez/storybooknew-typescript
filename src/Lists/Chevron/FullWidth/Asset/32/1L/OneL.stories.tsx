import React from 'react';
import OneL from '.';
import {assetEnum} from '../../../../../../Assets/32/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Chevron/FullWidth/Asset/32/1L',
    component: OneL,
};

export const OneLStorie = (args: {
    text: string;
    onClick: Function;
    asset: assetEnum;
    hideLine?: boolean;
    tabIndex?: number;
    colorText?: boolean;
    hideArrow?: boolean;
}) => (
    <OneL
        asset={args.asset}
        onClick={args.onClick}
        text={args.text}
        hideLine={args.hideLine}
        tabIndex={args.tabIndex}
        colorText={args.colorText}
        hideArrow={args.hideArrow}
    />
);

OneLStorie.argTypes = {
    text: {control: 'text'},
};

OneLStorie.args = {
    text: 'My Super Test',
    onClick: () => alert('Hello There'),
    asset: 'Shop',
    tabIndex: 0,
    hideLine: false,
    colorText: false,
    hideArrow: false
};
