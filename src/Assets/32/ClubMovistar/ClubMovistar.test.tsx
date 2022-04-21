import React from 'react';
import {shallow} from 'enzyme';
import ClubMovistar from './ClubMovistar';

it('ClubMovistar is an svg', () => {
    const wrapper = shallow(<ClubMovistar />);
    expect(wrapper.type()).toEqual('svg');
});

it('ClubMovistar is 32x32', () => {
    const wrapper = shallow(<ClubMovistar />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
