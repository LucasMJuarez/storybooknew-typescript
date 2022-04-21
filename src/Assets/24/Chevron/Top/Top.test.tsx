import React from 'react';
import {shallow} from 'enzyme';
import Top from './Top';

it('Right is an svg', () => {
    const wrapper = shallow(<Top />);
    expect(wrapper.type()).toEqual('svg');
});

it('Right is 24x24', () => {
    const wrapper = shallow(<Top />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
