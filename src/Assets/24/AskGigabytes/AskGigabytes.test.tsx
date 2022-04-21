import React from 'react';
import {shallow} from 'enzyme';
import AskGigabytes from './AskGigabytes';

it('AskGigabytes is an svg', () => {
    const wrapper = shallow(<AskGigabytes />);
    expect(wrapper.type()).toEqual('svg');
});

it('AskGigabytes is 24x24', () => {
    const wrapper = shallow(<AskGigabytes />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
