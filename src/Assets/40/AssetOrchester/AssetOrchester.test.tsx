import React from 'react';
import {render, shallow} from 'enzyme';
import AssetOrchester from './AssetOrchester';

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
    | 'Mobile'
    | 'MobilePurple'
    | 'TopupBalanceSos'
    | 'Computer'
    | 'Smartphone'
    | 'ProductPlaceholder01'
    | 'SupportChat'
    | 'GsmGreen'
    | 'FourG'
    | 'LandLineInvoice'
    | 'PassGigabytes'
    | 'MovistarTv'
    | 'Add';

const assetList: assetEnum[] = [
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
    'Mobile',
    'MobilePurple',
    'TopupBalanceSos',
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
