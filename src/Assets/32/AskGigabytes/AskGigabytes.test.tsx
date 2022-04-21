import React from 'react';
import {shallow} from 'enzyme';
import AskGigabytes from './AskGigabytes';

it('AskGigabytes is an svg', () => {
    const wrapper = shallow(<AskGigabytes />);
    expect(wrapper.type()).toEqual('svg');
});

it('AskGigabytes is 32x32', () => {
    const wrapper = shallow(<AskGigabytes />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
