import React from 'react';
import ListAssetBase from '.';
import type {assetEnum} from '../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Amount/Asset/40/Label2LDown',
    component: ListAssetBase,
};

export const Label2LDown_Touchable = (args: {
    asset: assetEnum;
    title: string;
    amount: number | string;
    onClick?: Function;
    touchable?: boolean;
    showNegativeSymbol?: boolean;
    tabIndex?: number;
}) => <ListAssetBase {...args} />;

Label2LDown_Touchable.args = {
    asset: 'AskTopupBalance',
    title: 'My Super Title',
    amount: 33,
    labelText: 'PROMO',
    labelCategory: 'First',
    touchable: true,
    onClick: () => alert('kiace'),
    tabIndex: 0,
};

export const Label2LDown_Not_Touchable = (args: {
    asset: assetEnum;
    title: string;
    amount: number | string;
    onClick?: Function;
    touchable?: boolean;
    showNegativeSymbol?: boolean;
}) => <ListAssetBase {...args} />;

Label2LDown_Not_Touchable.args = {
    asset: 'AskTopupBalance',
    title: 'My Super Title',
    amount: 33,
    labelText: 'PROMO',
    labelCategory: 'First',
};
