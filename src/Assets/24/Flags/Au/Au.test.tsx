import React from 'react';
import {shallow} from 'enzyme';
import Au from './Au';

it('is an svg', () => {
    const wrapper = shallow(<Au />);
    expect(wrapper.type()).toEqual('svg');
});

it(' is 24x24', () => {
    const wrapper = shallow(<Au />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
