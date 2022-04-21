import React from 'react';
import {shallow} from 'enzyme';
import ClubMovistar from './ClubMovistar';

it('ClubMovistar is an svg', () => {
    const wrapper = shallow(<ClubMovistar />);
    expect(wrapper.type()).toEqual('svg');
});

it('ClubMovistar is 24x24', () => {
    const wrapper = shallow(<ClubMovistar />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
