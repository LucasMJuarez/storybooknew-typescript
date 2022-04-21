import React from 'react';
import PlaceHolder from '.';
import { assetEnum } from '../../24/AssetOrchester/AssetOrchester';

export default {
    title: 'Assets/PlaceHolder/24/PlaceHolder',
    component: PlaceHolder,
};

export const PlaceHolder_Container = (args: {asset: assetEnum}) => <PlaceHolder asset={args.asset} />;

PlaceHolder_Container.args = {
    asset: 'TestDrive',
};