import React from 'react';
import {shallow} from 'enzyme';
import LayoutChatSupport from './LayoutChatSupport';

it('LayoutChatSupport is an svg', () => {
    const wrapper = shallow(<LayoutChatSupport />);
    expect(wrapper.type()).toEqual('svg');
});

it('LayoutChatSupport is 32x32', () => {
    const wrapper = shallow(<LayoutChatSupport />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
