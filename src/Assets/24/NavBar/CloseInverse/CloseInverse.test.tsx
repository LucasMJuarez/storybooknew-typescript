import React from 'react';
import {shallow} from 'enzyme';
import CloseInverse from './CloseInverse';

it('CloseInverse is an svg', () => {
    const wrapper = shallow(<CloseInverse />);
    expect(wrapper.type()).toEqual('svg');
});

it('CloseInverse is 24x24', () => {
    const wrapper = shallow(<CloseInverse />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
