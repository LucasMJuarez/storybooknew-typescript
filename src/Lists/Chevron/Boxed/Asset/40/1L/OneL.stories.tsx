import React from 'react';
import OneL from '.';
import { assetEnum } from '../../../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Chevron/Boxed/Asset/40/1L',
    component: OneL,
};

export const OneLStorie = (args: {
    text: string;
    isSelected: boolean;
    onClick: Function;
    asset: assetEnum;
    tabIndex?: number;
    role?: string;
    ariaLabel?: string;
    showArrow?: boolean;
    onkeyPress?: React.KeyboardEventHandler;
}) => (
    <div>
        <OneL
            asset={args.asset}
            onClick={args.onClick}
            text={args.text}
            isSelected={args.isSelected}
            tabIndex={args.tabIndex}
            role={args.role}
            ariaLabel={args.ariaLabel}
            onkeyPress={args.onkeyPress}
            showArrow={args.showArrow}
        />
    </div>
);

OneLStorie.args = {
    text: 'Línea fija / Internet / Fibra',
    isSelected: false,
    onClick: () => alert('Hello There'),
    asset: 'LandlineAndInternet',
    tabIndex: 0,
    role: 'button',
    ariaLabel: 'Internet',
    showArrow: false,
    onkeyPress: () => alert('Hello keypress'),
};
