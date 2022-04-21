import React from 'react';
import {shallow} from 'enzyme';
import LandlineAndInternet from './LandlineAndInternet';

it('LandlineAndInternet is an svg', () => {
    const wrapper = shallow(<LandlineAndInternet />);
    expect(wrapper.type()).toEqual('svg');
});
