import React from 'react';
import {render, shallow} from 'enzyme';
import AssetOrchester from './AssetOrchester';
import fs from 'fs';
import path from 'path';
import type {assetEnum} from './AssetOrchester';

const assetList: assetEnum[] = [
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
    'Mobile',
    'Multiplica',
    'ArmYourPackage',
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
    'SaveGigabytes',
    'Warranty',
    'SimReplacementWhite',
    'CreditWhite',
    'Totalization',
    'Family',
    'AllProducts',
];

it('Is an assetName component', () => {
    assetList.map((assetName: assetEnum) => {
        const wrapper = shallow(<AssetOrchester asset={assetName} />);
        expect(wrapper.text()).toEqual(`<${assetName} />`);
    });
});
it('Each asset is an svg', () => {
    assetList.map((assetName: assetEnum) => {
        const renderedWrapper = render(<AssetOrchester asset={assetName} />);
        expect(renderedWrapper.is('svg')).toEqual(true);
    });
});

test('Each Assets/32 icon is included in this test', () => {
    const folders = fs.readdirSync(path.join('src', 'Assets', '32'));
    const iconsCount = folders.length - 1;
    const iconsInTest = assetList.length;
    expect(iconsCount).toEqual(iconsInTest);
});
