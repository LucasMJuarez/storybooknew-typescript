import React from 'react';
import {shallow} from 'enzyme';
import Location from './Location';

it('is an svg', () => {
    const wrapper = shallow(<Location />);
    expect(wrapper.type()).toEqual('svg');
});
