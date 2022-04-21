import React from 'react';
import PlaceHolder from '.';
import { assetEnum } from '../../40/AssetOrchester/AssetOrchester';

export default {
    title: 'Assets/PlaceHolder/40/PlaceHolder',
    component: PlaceHolder,
};

export const PlaceHolder_Container = (args: {asset: assetEnum}) => <PlaceHolder asset={args.asset} />;

PlaceHolder_Container.args = {
    asset: 'Mobile',
};