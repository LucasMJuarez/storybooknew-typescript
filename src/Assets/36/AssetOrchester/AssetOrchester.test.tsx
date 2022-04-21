import React from 'react';
import {render, shallow} from 'enzyme';
import AssetOrchester from './AssetOrchester';

type assetEnum =
    | 'Data'
    | 'DataGrey'
    | 'GSM_Green'
    | 'GSM_GreenGrey'
    | 'SmsGrey'
    | 'Sms';

const assetList: assetEnum[] = [
    'Data',
    'DataGrey',
    'GSM_Green',
    'GSM_GreenGrey',
    'SmsGrey',
    'Sms'
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
