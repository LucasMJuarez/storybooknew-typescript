import React from 'react';
import AssetOrchester, {assetEnum} from './AssetOrchester';

export default {
    title: 'Assets/24/AssetOrchester',
    component: AssetOrchester,
};

export const AssetOrchesterStorie = (args: {asset: assetEnum}) => <AssetOrchester asset={args.asset} />;

AssetOrchesterStorie.argTypes = {
    asset: {
        control: {
            type: 'select',
            options: [
                'Gsm_Blue',
                'Fourg',
                'Fiber',
                'Call',
                'Close',
                'CloseInverse',
                'AlertInfo',
                'Notifications',
                'Lock',
                'ArmYourPackage',
                'InternationalVd',
                'Multiplica',
                'Paquetizate',
                'Roaming',
                'LogOut',
                'Profile',
                'Mobile',
                'MobilePurple',
                'LayoutTariffs',
                'AdditionalLine',
                'AskGigabytes',
                'ChangeTariff',
                'ClubMovistar',
                'ConnectionTest',
                'Contest',
                'Credit',
                'DeviceConfiguration',
                'DeviceUpgrade',
                'Family',
                'Help',
                'Notice',
                'PassGigabytes',
                'PaymentPlaces',
                'PremiumSms',
                'Shop',
                'Talk',
                'TestDrive',
                'TopupInvoice',
                'Warranty',
                'AlertWarning',
                'RoamingInfo',
                'Television',
                'SaveGigabytes',
                'Bills',
                'CreditCardsFee',
                'LightDown',
                'Bills_2',
                'Gray',
                'Envelope',
                'AlertInfoWhite',
                'CellphoneUnlonck',
                'Others',
                'Bin',
                'MovistarTv',
                'LayoutDownloadInvers',
                'Shared_Cloud_Actived2',
            ],
        },
    },
};

AssetOrchesterStorie.args = {
    asset: 'Gsm_Blue',
};
