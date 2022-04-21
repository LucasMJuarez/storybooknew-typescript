import React from 'react';
import {shallow} from 'enzyme';
import RadioOff from './RadioOff';

it('RadioOff is an svg', () => {
    const wrapper = shallow(<RadioOff />);
    expect(wrapper.type()).toEqual('svg');
});

it('RadioOff is 26x24', () => {
    const wrapper = shallow(<RadioOff />);
    expect(wrapper.prop('width')).toEqual('26');
    expect(wrapper.prop('height')).toEqual('24');
});
