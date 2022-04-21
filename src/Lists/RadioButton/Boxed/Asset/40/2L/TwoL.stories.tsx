import React from 'react';
import TwoL from './TwoL';
import {assetEnum} from '../../../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/RadioButton/Boxed/Asset/40/2L',
    component: TwoL,
};

export const TwoLConsumtion = (args: {primaryText: string; secondaryText? : string, onClick: Function; asset: assetEnum}) => (
    <TwoL asset={args.asset} onClick={args.onClick} primaryText={args.primaryText} secondaryText={args.secondaryText} />
);

TwoLConsumtion.argTypes = {
    primaryText: {control: 'text'},
};

TwoLConsumtion.args = {
    primaryText: '7.22 GB de 10 GB',
    secondaryText : '',
    onClick: () => alert('Hello There'),
    asset: 'DataGrey',
};
