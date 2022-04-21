import React from 'react';
import {shallow} from 'enzyme';
import IcnArrow from './IcnArrow';

it('IcnArrow is an svg', () => {
    const wrapper = shallow(<IcnArrow />);
    expect(wrapper.type()).toEqual('svg');
});

it('IcnArrow is 24x24', () => {
    const wrapper = shallow(<IcnArrow />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
