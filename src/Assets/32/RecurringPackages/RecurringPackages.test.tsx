import React from 'react';
import {shallow} from 'enzyme';
import RecurringPackages from './RecurringPackages';

it('RecurringPackages is an svg', () => {
    const wrapper = shallow(<RecurringPackages />);
    expect(wrapper.type()).toEqual('svg');
});

it('RecurringPackages is 32x32', () => {
    const wrapper = shallow(<RecurringPackages />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
