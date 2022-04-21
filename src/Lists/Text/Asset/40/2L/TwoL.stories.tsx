import React from 'react';
import TwoL from './TwoL';
import {assetEnum} from '../../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Text/Asset/40/2L',
    component: TwoL,
};

export const TwoLTestDrive = (args: {
    primaryText: string; 
    secondaryText: string; 
    onClick: Function; 
    asset: assetEnum;
    hideLine?: boolean;
}) => (
    <TwoL 
        asset={args.asset} 
        onClick={args.onClick} 
        primaryText={args.primaryText} 
        secondaryText={args.secondaryText} 
        hideLine={args.hideLine}
    />
);

TwoLTestDrive.argTypes = {
    text: {control: 'text'},
};

TwoLTestDrive.args = {
    primaryText: '10GB al mes',
    secondaryText: 'Para navegar',
    onClick: () => alert('Hello There'),
    asset: 'DataCircle'
};
