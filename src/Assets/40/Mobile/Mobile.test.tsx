import React from 'react';
import {shallow} from 'enzyme';
import Mobile from './Mobile';

it('Mobile is an svg', () => {
    const wrapper = shallow(<Mobile />);
    expect(wrapper.type()).toEqual('svg');
});