import React from 'react';
import {shallow} from 'enzyme';
import Notice from './Notice';

it('Notice is an svg', () => {
    const wrapper = shallow(<Notice />);
    expect(wrapper.type()).toEqual('svg');
});

it('Notice is 24x24', () => {
    const wrapper = shallow(<Notice />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
