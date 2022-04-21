import React from 'react';
import {shallow} from 'enzyme';
import Envelope from './Envelope';

it('is an svg', () => {
    const wrapper = shallow(<Envelope />);
    expect(wrapper.type()).toEqual('svg');
});

it('Envelope is 32x32', () => {
    const wrapper = shallow(<Envelope />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
