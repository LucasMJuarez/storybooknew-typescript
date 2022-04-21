import React from 'react';
import {shallow} from 'enzyme';
import Gift from './Gift';

it('Gift is an svg', () => {
    const wrapper = shallow(<Gift />);
    expect(wrapper.type()).toEqual('svg');
});
