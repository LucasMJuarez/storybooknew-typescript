import React from 'react';
import {shallow} from 'enzyme';
import Internet from './Internet';

it('Internet is an svg', () => {
    const wrapper = shallow(<Internet />);
    expect(wrapper.type()).toEqual('svg');
});