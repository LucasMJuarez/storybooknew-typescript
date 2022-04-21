import React from 'react';
import {shallow} from 'enzyme';
import PlaceholderGallery from './PlaceholderGallery';

it('PlaceholderGallery is an svg', () => {
    const wrapper = shallow(<PlaceholderGallery />);
    expect(wrapper.type()).toEqual('svg');
    expect(wrapper.childAt(2).type()).toEqual('g');
});

it('PlaceholderGallery is 40x40', () => {
    const wrapper = shallow(<PlaceholderGallery />);
    expect(wrapper.prop('width')).toEqual('40px');
    expect(wrapper.prop('height')).toEqual('40px');
});
