import React from 'react';
import ListAssetBase from '.';
import type {assetEnum} from '../../../../Assets/40/AssetOrchester/AssetOrchester';

export default {
    title: 'Lists/Amount/Asset/40/2L',
    component: ListAssetBase,
};

export const TwoL_Touchable = (args: {
    asset: assetEnum;
    title: string;
    description: string;
    amount: number | string;
    onClick?: Function;
    touchable?: boolean;
    tabIndex?: number;
    showNegativeSymbol?: boolean;
}) => <ListAssetBase {...args} />;

TwoL_Touchable.args = {
    asset: 'AskTopupBalance',
    title: 'My Super Title',
    description: 'My Super Description',
    amount: 33,
    touchable: true,
    onClick: () => alert('kiace'),
    tabIndex: 0,
};

export const TwoL_Not_Touchable = (args: {
    asset: assetEnum;
    title: string;
    description: string;
    amount: number | string;
    onClick?: Function;
    touchable?: boolean;
    showNegativeSymbol?: boolean;
}) => <ListAssetBase {...args} />;

TwoL_Not_Touchable.args = {
    asset: 'AskTopupBalance',
    title: 'My Super Title',
    description: 'My Super Description',
    amount: 33,
};
