import React from 'react';
import {shallow} from 'enzyme';
import Television from './Television';

it('Television is an svg', () => {
    const wrapper = shallow(<Television />);
    expect(wrapper.type()).toEqual('svg');
});

it('Television is 24x24', () => {
    const wrapper = shallow(<Television />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
