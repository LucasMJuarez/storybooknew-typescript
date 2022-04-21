import React from 'react';
import {shallow} from 'enzyme';
import Whatsapp from './Whatsapp';

it('Whatsapp is an svg', () => {
    const wrapper = shallow(<Whatsapp />);
    expect(wrapper.type()).toEqual('svg');
});

it('Whatsapp is 32x32', () => {
    const wrapper = shallow(<Whatsapp />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
