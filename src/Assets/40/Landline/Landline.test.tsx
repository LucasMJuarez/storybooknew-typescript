import React from 'react';
import {shallow} from 'enzyme';
import Landline from './Landline';

it('Landline is an svg', () => {
    const wrapper = shallow(<Landline />);
    expect(wrapper.type()).toEqual('svg');
});
