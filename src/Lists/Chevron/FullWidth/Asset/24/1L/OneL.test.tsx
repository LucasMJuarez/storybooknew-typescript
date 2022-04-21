import React from 'react';
import { shallow } from 'enzyme';
import OneL from './OneL';
import AssetOrchester, { assetEnum } from '../../../../../../Assets/24/AssetOrchester/AssetOrchester';

const assets: assetEnum[] = [
    'Gsm_Blue',
    'Fourg',
    'Fiber',
];

it('is truthy', () => {
    expect(OneL).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<OneL asset={assets[0]} onClick={() => { }} text='Yeaah' />);
    expect(wrapper.children().children().first().children().last().prop('text')).toContain('Yeaah');
});
it('Is touchable', () => {
    const mock = jest.fn();
    const wrapper = shallow(<OneL asset={assets[0]} onClick={mock} text='Yeaah' />);
    wrapper.children().first().simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
});
it('Have each asset', () => {
    assets.map((asset: assetEnum) => {
        const wrapper = shallow(<OneL asset={asset} onClick={() => { }} text='Yeaah' />);
        expect(wrapper.find(AssetOrchester).prop('asset')).toEqual(asset);
    });
});
