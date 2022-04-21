import React from 'react';
import AssetOrchester from './AssetOrchester';

export default {
    title: 'Assets/40/AssetOrchester',
    component: AssetOrchester,
};
type assetEnum =
    | 'Allproducts'
    | 'AskTopupBalance'
    | 'CallCircle'
    | 'DataCircle'
    | 'Gift'
    | 'Purchase'
    | 'SendBalance'
    | 'SmsCircle'
    | 'TopupBalance'
    | 'TopupCreditcard'
    | 'TopupPrepaidcard'
    | 'Tv'
    | 'LandlineAndInternet'
    | 'MovBalance'
    | 'TopupBalanceSos'
    | 'DataGrey'
    | 'Computer'
    | 'Smartphone'
    | 'SupportChat';

export const AssetOrchesterStorie = (args: {asset: assetEnum}) => <AssetOrchester asset={args.asset} />;

AssetOrchesterStorie.argTypes = {
    asset: {
        control: {
            type: 'select',
            options: [
                'Allproducts',
                'AskTopupBalance',
                'CallCircle',
                'DataCircle',
                'Gift',
                'Purchase',
                'SendBalance',
                'SmsCircle',
                'TopupBalance',
                'TopupCreditcard',
                'TopupPrepaidcard',
                'Tv',
                'LandlineAndInternet',
                'MovBalance',
                'TopupBalanceSos',
                'DataGrey',
                'Computer',
                'Smartphone',
                'SupportChat',
            ],
        },
    },
};

AssetOrchesterStorie.args = {
    asset: 'AskTopupBalance',
};
