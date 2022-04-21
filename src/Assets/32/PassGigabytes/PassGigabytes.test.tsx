import React from 'react';
import {shallow} from 'enzyme';
import PassGigabytes from './PassGigabytes';

it('PassGigabytes is an svg', () => {
    const wrapper = shallow(<PassGigabytes />);
    expect(wrapper.type()).toEqual('svg');
});

it('PassGigabytes is 32x32', () => {
    const wrapper = shallow(<PassGigabytes />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
