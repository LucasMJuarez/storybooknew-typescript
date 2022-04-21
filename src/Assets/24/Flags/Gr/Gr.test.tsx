import React from 'react';
import {shallow} from 'enzyme';
import Gr from './Gr';

it('is an svg', () => {
    const wrapper = shallow(<Gr />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Gr />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
