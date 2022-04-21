import React from 'react';
import {shallow} from 'enzyme';
import CallCircle from './CallCircle';

it('CallCircle is an svg', () => {
    const wrapper = shallow(<CallCircle />);
    expect(wrapper.type()).toEqual('svg');
});
