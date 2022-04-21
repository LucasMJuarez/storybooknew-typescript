import React from 'react';
import PlaceHolder from '.';
import { assetEnum } from '../../36/AssetOrchester/AssetOrchester';

export default {
    title: 'Assets/PlaceHolder/36/PlaceHolder',
    component: PlaceHolder,
};

export const PlaceHolder_Container = (args: {asset: assetEnum}) => <PlaceHolder asset={args.asset} />;

PlaceHolder_Container.args = {
    asset: 'Mobile',
};