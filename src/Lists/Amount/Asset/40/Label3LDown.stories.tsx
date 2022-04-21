import React from 'react';
import ListAssetBase from '.';
import type {assetEnum} from '../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Amount/Asset/40/Label3LDown',
    component: ListAssetBase,
};

export const Label3LDown_Touchable = (args: {
    asset: assetEnum;
    title: string;
    description: string;
    amount: number | string;
    onClick?: Function;
    touchable?: boolean;
    tabIndex?: number;
    showNegativeSymbol?: boolean;
}) => <ListAssetBase {...args} />;

Label3LDown_Touchable.args = {
    asset: 'AskTopupBalance',
    title: 'My Super Title',
    description: 'My Super Description',
    amount: 33,
    labelText: 'PROMO',
    labelCategory: 'First',
    touchable: true,
    onClick: () => alert('kiace'),
    tabIndex: 0,
};

export const Label3LDown_Not_Touchable = (args: {
    asset: assetEnum;
    title: string;
    description: string;
    amount: number | string;
    onClick?: Function;
    touchable?: boolean;
    tabIndex?: number;
    showNegativeSymbol?: boolean;
}) => <ListAssetBase {...args} />;

Label3LDown_Not_Touchable.args = {
    asset: 'AskTopupBalance',
    title: 'My Super Title',
    description: 'My Super Description',
    amount: 33,
    labelText: 'PROMO',
    labelCategory: 'First',
};
