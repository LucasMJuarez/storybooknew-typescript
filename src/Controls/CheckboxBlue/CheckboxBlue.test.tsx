import React from 'react';
import {shallow} from 'enzyme';
import CheckboxBlue from './CheckboxBlue';

it('CheckboxBlue is an svg', () => {
    const wrapper = shallow(<CheckboxBlue />);
    expect(wrapper.type()).toEqual('svg');
});

it('CheckboxBlue is 24x24', () => {
    const wrapper = shallow(<CheckboxBlue />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
