import React from 'react';
import {shallow} from 'enzyme';
import Fr from './Fr';

it('is an svg', () => {
    const wrapper = shallow(<Fr />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Fr />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
