import React from 'react';
import {shallow} from 'enzyme';
import Left from './Left';

it('Right is an svg', () => {
    const wrapper = shallow(<Left />);
    expect(wrapper.type()).toEqual('svg');
});

it('Right is 24x24', () => {
    const wrapper = shallow(<Left />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
