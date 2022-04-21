import React from 'react';
import {shallow} from 'enzyme';
import Contest from './Contest';

it('Contest is an svg', () => {
    const wrapper = shallow(<Contest />);
    expect(wrapper.type()).toEqual('svg');
});

it('Contest is 24x24', () => {
    const wrapper = shallow(<Contest />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
