import React from 'react';
import {shallow} from 'enzyme';
import LayoutDownloadInvers from './LayoutDownloadInvers';

const mockFn = jest.fn();
it('LayoutDownloadInvers is an svg', () => {
    const wrapper = shallow(<LayoutDownloadInvers onClick={mockFn} />);
    expect(wrapper.type()).toEqual('svg');
});

it('LayoutDownloadInvers is 24x24', () => {
    const wrapper = shallow(<LayoutDownloadInvers onClick={mockFn} />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});

it('LayoutDownloadInvers onClick props', () => {
    const wrapper = shallow(<LayoutDownloadInvers onClick={mockFn} />);
    expect(wrapper.simulate('click')).toBeTruthy();
});
