import React from 'react';
import {shallow} from 'enzyme';
import Gray from './Gray';

it('is an svg', () => {
    const wrapper = shallow(<Gray />);
    expect(wrapper.type()).toEqual('svg');
});
it(' is 24x24', () => {
    const wrapper = shallow(<Gray />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('25');
});
