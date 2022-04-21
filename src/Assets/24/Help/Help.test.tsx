import React from 'react';
import {shallow} from 'enzyme';
import Help from './Help';

it('Help is an svg', () => {
    const wrapper = shallow(<Help />);
    expect(wrapper.type()).toEqual('svg');
});

it('Help is 24x24', () => {
    const wrapper = shallow(<Help />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
