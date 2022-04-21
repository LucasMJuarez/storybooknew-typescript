import React from 'react';
import { shallow } from 'enzyme';
import PlaceHolder from './PlaceHolder';
import AssetOrchester, { assetEnum } from '../../36/AssetOrchester/AssetOrchester';

const assets: assetEnum[] = [
    'Data',
    'DataGrey',
    'GSM_Green',
    'GSM_GreenGrey',
    'SmsGrey',
    'Sms'
];
it('is truthy', () => {
    expect(PlaceHolder).toBeTruthy();
});
it('Have each asset', () => {
    assets.map((asset: assetEnum) => {
        const wrapper = shallow(<PlaceHolder asset={asset}/>);
        expect(wrapper.find(AssetOrchester).prop('asset')).toEqual(asset);
    });
});
