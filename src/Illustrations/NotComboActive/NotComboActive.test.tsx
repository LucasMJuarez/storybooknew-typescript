import React from 'react';
import {shallow} from 'enzyme';
import NotComboActive from './NotComboActive';

it('NotComboActive is an svg', () => {
    const wrapper = shallow(<NotComboActive />);
    expect(wrapper.type()).toEqual('svg');
});
