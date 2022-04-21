import React from 'react';
import {shallow} from 'enzyme';
import TopupMercadopagoBalance from './TopupMercadopagoBalance';

it('TopupMercadopagoBalance is an svg', () => {
    const wrapper = shallow(<TopupMercadopagoBalance />);
    expect(wrapper.type()).toEqual('svg');
});

it('TopupMercadopagoBalance is 32x32', () => {
    const wrapper = shallow(<TopupMercadopagoBalance />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
