import React from 'react';
import {shallow} from 'enzyme';
import Data from './Data';

it('Data is an svg', () => {
    const wrapper = shallow(<Data />);
    expect(wrapper.type()).toEqual('svg');
});

it('Data is 24x24', () => {
    const wrapper = shallow(<Data />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
