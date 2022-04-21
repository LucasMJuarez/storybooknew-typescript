import React from 'react';
import {shallow} from 'enzyme';
import Envelope from './Envelope';

it('is an svg', () => {
    const wrapper = shallow(<Envelope />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Envelope />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
