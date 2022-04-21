import React from 'react';
import {shallow} from 'enzyme';
import Br from './Br';

it('is an svg', () => {
    const wrapper = shallow(<Br />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Br />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
