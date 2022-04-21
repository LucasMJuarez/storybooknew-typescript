import React from 'react';
import {shallow} from 'enzyme';
import Close from './Close';

it('Close is an svg', () => {
    const wrapper = shallow(<Close />);
    expect(wrapper.type()).toEqual('svg');
});

it('Close is 24x24', () => {
    const wrapper = shallow(<Close />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
