import React from 'react';
import {shallow} from 'enzyme';
import BackInverse from './BackInverse';

it('BackInverse is an svg', () => {
    const wrapper = shallow(<BackInverse />);
    expect(wrapper.type()).toEqual('svg');
});

it('BackInverse is 24x24', () => {
    const wrapper = shallow(<BackInverse />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
