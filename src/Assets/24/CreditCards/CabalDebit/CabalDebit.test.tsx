import React from 'react';
import {shallow} from 'enzyme';
import CabalDebit from './CabalDebit';

it('is an svg', () => {
    const wrapper = shallow(<CabalDebit />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<CabalDebit />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});