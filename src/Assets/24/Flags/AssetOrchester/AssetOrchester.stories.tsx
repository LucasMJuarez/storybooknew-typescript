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
                'Au',
                'Be',
                'Bo',
                'Br',
                'Ca',
                'Cl',
                'Credit',
                'Co',
                'Cr',
                'De',
                'Ec',
                'Es',
                'Fr',
                'Gr',
                'It',
                'Lx',
                'LayoutSimfourg',
                'Mx',
                'Nl',
                'Ny',
                'Pa',
                'Pe',
                'Po',
                'Us',
            ],
        },
    },
};

AssetOrchesterStorie.args = {
    asset: 'Au',
};
