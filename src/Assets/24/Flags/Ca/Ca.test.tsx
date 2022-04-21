import React from 'react';
import {shallow} from 'enzyme';
import Ca from './Ca';

it('is an svg', () => {
    const wrapper = shallow(<Ca />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Ca />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
