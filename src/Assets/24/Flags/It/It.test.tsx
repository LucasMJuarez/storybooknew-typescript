import React from 'react';
import {shallow} from 'enzyme';
import It from './It';

it('is an svg', () => {
    const wrapper = shallow(<It />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<It />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
