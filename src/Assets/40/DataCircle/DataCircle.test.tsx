import React from 'react';
import {shallow} from 'enzyme';
import DataCircle from './DataCircle';

it('DataCircle is an svg', () => {
    const wrapper = shallow(<DataCircle />);
    expect(wrapper.type()).toEqual('svg');
});
