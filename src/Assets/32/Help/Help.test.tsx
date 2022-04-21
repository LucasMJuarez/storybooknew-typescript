import React from 'react';
import {shallow} from 'enzyme';
import Help from './Help';

it('Help is an svg', () => {
    const wrapper = shallow(<Help />);
    expect(wrapper.type()).toEqual('svg');
});

it('Help is 32x32', () => {
    const wrapper = shallow(<Help />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
