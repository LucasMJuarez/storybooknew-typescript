import React from 'react';
import {shallow} from 'enzyme';
import Notice from './Notice';

it('Notice is an svg', () => {
    const wrapper = shallow(<Notice />);
    expect(wrapper.type()).toEqual('svg');
});

it('Notice is 32x32', () => {
    const wrapper = shallow(<Notice />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
