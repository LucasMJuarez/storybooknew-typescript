import React from 'react';
import {shallow} from 'enzyme';
import Paquetizate from './Paquetizate';

it('Paquetizate is an svg', () => {
    const wrapper = shallow(<Paquetizate />);
    expect(wrapper.type()).toEqual('svg');
});

it('Paquetizate is 24x24', () => {
    const wrapper = shallow(<Paquetizate />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
