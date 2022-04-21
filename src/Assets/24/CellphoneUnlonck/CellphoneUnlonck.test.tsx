import React from 'react';
import {shallow} from 'enzyme';
import CellphoneUnlonck from './CellphoneUnlonck';

it('is an svg', () => {
    const wrapper = shallow(<CellphoneUnlonck />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<CellphoneUnlonck />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
