import React from 'react';
import {shallow} from 'enzyme';
import Add from './Add';

it('Add is an svg', () => {
    const wrapper = shallow(<Add />);
    expect(wrapper.type()).toEqual('svg');
});
