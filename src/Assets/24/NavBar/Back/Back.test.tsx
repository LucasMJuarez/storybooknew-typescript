import React from 'react';
import {shallow} from 'enzyme';
import Back from './Back';

it('Back is an svg', () => {
    const wrapper = shallow(<Back />);
    expect(wrapper.type()).toEqual('svg');
});

it('Back is 24x24', () => {
    const wrapper = shallow(<Back />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
