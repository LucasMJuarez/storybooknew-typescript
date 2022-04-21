import React from 'react';
import AssetOrchester, {assetEnum} from './AssetOrchester';

export default {
    title: 'Assets/24/Flags/AssetOrchester',
    component: AssetOrchester,
};

export const AssetOrchesterStorie = (args: {asset: assetEnum}) => <AssetOrchester asset={args.asset} />;

AssetOrchesterStorie.argTypes = {
    asset: {
        control: {
            type: 'select',
            options: [
                'Vi',
                'Ar',
            ],
        },
    },
};

AssetOrchesterStorie.args = {
    asset: 'Au',
};
