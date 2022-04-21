import React from 'react';
import {shallow} from 'enzyme';
import SaveGigabytes from './SaveGigabytes';

it('SaveGigabytes is an svg', () => {
    const wrapper = shallow(<SaveGigabytes />);
    expect(wrapper.type()).toEqual('svg');
});

it('SaveGigabytes is 32x32', () => {
    const wrapper = shallow(<SaveGigabytes />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
