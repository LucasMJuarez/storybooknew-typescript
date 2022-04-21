import React from 'react';
import {render, shallow} from 'enzyme';
import AssetOrchester, {assetEnum} from './AssetOrchester';

const assetList: assetEnum[] = [
    'Gsm_Blue',
    'Fourg',
    'Fiber',
    'Call',
    'Close',
    'CloseInverse',
    'AlertInfo',
    'Notifications',
    'Lock',
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
    'Television',
    'RoamingInfo',
    'SaveGigabytes',
    'Bills',
    'CreditCardsFee',
    'LightDown',
    'Bills_2',
    'Gray',
    'Envelope',
    'Bin',
    'MovistarTv',
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
