import React from 'react';
import {shallow} from 'enzyme';
import OneL from './OneL';
import AssetOrchester, {assetEnum} from '../../../../../Assets/24/Flags/AssetOrchester/AssetOrchester';

const assets: assetEnum[] = ['Ny', 'Pa', 'Pe', 'Po', 'Us'];

it('is truthy', () => {
    expect(OneL).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<OneL asset={assets[0]} text='Yeaah' />);
    expect(wrapper.children().children().first().children().last().prop('text')).toContain('Yeaah');
});
it('Have each asset', () => {
    assets.map((asset: assetEnum) => {
        const wrapper = shallow(<OneL asset={asset} text='Yeaah' />);
        expect(wrapper.find(AssetOrchester).prop('asset')).toEqual(asset);
    });
});
