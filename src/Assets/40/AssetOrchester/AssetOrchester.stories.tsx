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
    | 'SendBalanceMagenta'
    | 'SmsCircle'
    | 'TopupBalance'
    | 'TopupCreditcard'
    | 'TopupPrepaidcard'
    | 'Tv'
    | 'LandlineAndInternet'
    | 'MovBalance'
    | 'MobilePurple'
    | 'TopupBalanceSos'
    | 'DataGrey'
    | 'Computer'
    | 'Smartphone'
    | 'ProductPlaceholder01'
    | 'SupportChat'
    | 'GsmGreen'
    | 'FourG'
    | 'LandLineInvoice'
    | 'PassGigabytes'
    | 'MovistarTv'
    | 'Add'
    | 'PlaceholderGallery';

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
                'SendBalanceMagenta',
                'SmsCircle',
                'TopupBalance',
                'TopupCreditcard',
                'TopupPrepaidcard',
                'Tv',
                'LandlineAndInternet',
                'MovBalance',
                'MobilePurple',
                'TopupBalanceSos',
                'DataGrey',
                'Computer',
                'Smartphone',
                'ProductPlaceholder01',
                'SupportChat',
                'GsmGreen',
                'FourG',
                'LandLineInvoice',
                'PassGigabytes',
                'MovistarTv',
                'Add',
                'PlaceholderGallery',
            ],
        },
    },
};

AssetOrchesterStorie.args = {
    asset: 'AskTopupBalance',
};
