import React from 'react';
import {shallow} from 'enzyme';
import Talk from './Talk';

it('Talk is an svg', () => {
    const wrapper = shallow(<Talk />);
    expect(wrapper.type()).toEqual('svg');
});

it('Talk is 24x24', () => {
    const wrapper = shallow(<Talk />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
