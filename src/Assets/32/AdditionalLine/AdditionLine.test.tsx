import React from 'react';
import {shallow} from 'enzyme';
import AdditionalLine from './AdditionalLine';

it('AdditionalLine is an svg', () => {
    const wrapper = shallow(<AdditionalLine />);
    expect(wrapper.type()).toEqual('svg');
});

it('AdditionalLine is 32x32', () => {
    const wrapper = shallow(<AdditionalLine />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
