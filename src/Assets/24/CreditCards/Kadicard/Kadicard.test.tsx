import React from 'react';
import {shallow} from 'enzyme';
import Kadicard from './Kadicard';

it('is an svg', () => {
    const wrapper = shallow(<Kadicard />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Kadicard />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});