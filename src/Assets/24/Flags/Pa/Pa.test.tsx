import React from 'react';
import {shallow} from 'enzyme';
import Pa from './Pa';

it('is an svg', () => {
    const wrapper = shallow(<Pa />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Pa />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
