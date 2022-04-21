import React from 'react';
import AssetOrchester from './AssetOrchester';
import type {assetEnum} from './AssetOrchester';

export default {
    title: 'Assets/32/AssetOrchester',
    component: AssetOrchester,
};
export const AssetOrchesterStorie = (args: {asset: assetEnum}) => <AssetOrchester asset={args.asset} />;

AssetOrchesterStorie.argTypes = {
    asset: {
        control: {
            type: 'select',
            options: [
                'AskTopupBalance',
                'GestionTickets',
                'SendBalance',
                'SendBalanceMagenta',
                'TopupBalanceSos',
                'TopupCreditcard',
                'TopupMercadopagoBalance',
                'TopupPrepaidcard',
                'Bills',
                'Bills_2',
                'LayoutChatSupport',
                'Paquetizate',
                'RecurringPackages',
                'Roaming',
                'InternationalVd',
                'PackagesSms',
                'PackagesMinutes',
                'Whatsapp',
                'Television',
                'MovistarTv',
                'MovistarPlay',
                'TopupInvoice',
                'Credit',
                'CreditCardsFee',
                'FrequentQuestions',
                'Internet',
                'Landline',
                'Shop',
                'PassGigabytes',
                'AdditionalLine',
                'AskGigabytes',
                'ChangeTariff',
                'ClubMovistar',
                'Contest',
                'Help',
                'DeviceUpgrade',
                'Envelope',
                'Fiber',
                'Notice',
                'PaymentPlaces',
                'RoamingInfo',
                'Talk',
                'TestDrive',
                'Warranty',
                'SaveGigabytes',
                'Totalization',
                'Family',
                'AllProducts',
            ],
        },
    },
};

AssetOrchesterStorie.args = {
    asset: 'AskTopupBalance',
};
