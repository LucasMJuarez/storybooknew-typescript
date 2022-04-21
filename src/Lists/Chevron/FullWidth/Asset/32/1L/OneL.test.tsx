import React from 'react';
import {shallow} from 'enzyme';
import OneL from './OneL';
import AssetOrchester, {assetEnum} from '../../../../../../Assets/32/AssetOrchester/AssetOrchester';
import SlimLineCentered from '../../../../../../Dividers/SlimLineCentered';
import Right from '../../../../../../Assets/24/Chevron/Right';
import Text16R from '../../../../../../Resources/ListsChevron/Text16R';
import styles from './OneL.styles';

const { linkText } = styles

const assets: assetEnum[] = [
    'AskTopupBalance',
    'GestionTickets',
    'SendBalance',
    'TopupBalanceSos',
    'TopupCreditcard',
    'TopupMercadopagoBalance',
    'TopupPrepaidcard',
];

it('is truthy', () => {
    expect(OneL).toBeTruthy();
});
it("Have text 'Yeaah'", () => {
    const wrapper = shallow(<OneL asset={assets[0]} onClick={() => {}} text='Yeaah' />);
    expect(wrapper.find(Text16R).prop('text')).toContain('Yeaah');
});
it('Is touchable', () => {
    const mock = jest.fn();
    const wrapper = shallow(<OneL asset={assets[0]} onClick={mock} text='Yeaah' />);
    wrapper.simulate('click');
    expect(mock.mock.calls.length).toEqual(1);
});
it('Have each asset', () => {
    assets.map((asset: assetEnum) => {
        const wrapper = shallow(<OneL asset={asset} onClick={() => {}} text='Yeaah' />);
        expect(wrapper.find(AssetOrchester).prop('asset')).toEqual(asset);
    });
});
it('Hide SlimLineCentered', () => {
    const wrapper = shallow(<OneL asset={assets[0]} onClick={() => {}} text='Yeaah' hideLine={true} />);
    expect(wrapper.find(SlimLineCentered).length).toEqual(0);
});

it('Hide Right Arrow', () => {
    const wrapper = shallow(<OneL asset={assets[0]} onClick={() => {}} text='Yeaah' hideArrow={true} />);
    expect(wrapper.find(Right).length).toEqual(0);
});

it('Change text color', () => {
    const wrapper = shallow(<OneL asset={assets[0]} onClick={() => {}} text='Yeaah' colorText={true} />);
    expect(wrapper.find('[data-testid="color-text"]').hasClass(linkText)).toBeTruthy();
});
