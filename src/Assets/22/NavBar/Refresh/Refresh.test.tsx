import React from 'react';
import {shallow} from 'enzyme';
import Refresh from './Refresh';

const mockFn = jest.fn();
it('Refresh is an svg', () => {
    const wrapper = shallow(<Refresh onClick={mockFn} />);
    expect(wrapper.type()).toEqual('svg');
});

it('Refresh is 24x24', () => {
    const wrapper = shallow(<Refresh onClick={mockFn} />);
    expect(wrapper.prop('width')).toEqual('22');
    expect(wrapper.prop('height')).toEqual('22');
});

it('Refresh onClick props', () => {
    const wrapper = shallow(<Refresh onClick={mockFn} />);
    expect(wrapper.simulate('click')).toBeTruthy();
});
