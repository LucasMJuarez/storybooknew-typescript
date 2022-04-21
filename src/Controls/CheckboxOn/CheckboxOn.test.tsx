import React from 'react';
import {shallow} from 'enzyme';
import CheckboxOn from './CheckboxOn';

it('CheckboxOn is an svg', () => {
    const wrapper = shallow(<CheckboxOn />);
    expect(wrapper.type()).toEqual('svg');
});

it('CheckboxOn is 26x24', () => {
    const wrapper = shallow(<CheckboxOn />);
    expect(wrapper.prop('width')).toEqual('26');
    expect(wrapper.prop('height')).toEqual('24');
});
