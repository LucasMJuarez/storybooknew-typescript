import React from 'react';
import {shallow} from 'enzyme';
import Us from './Us';

it('is an svg', () => {
    const wrapper = shallow(<Us />);
    expect(wrapper.type()).toEqual('svg');
});

it('is 24x24', () => {
    const wrapper = shallow(<Us />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
