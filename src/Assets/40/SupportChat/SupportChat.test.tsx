import React from 'react';
import {shallow} from 'enzyme';
import SupportChat from './SupportChat';

it('SupportChat is an svg', () => {
    const wrapper = shallow(<SupportChat />);
    expect(wrapper.type()).toEqual('svg');
});
