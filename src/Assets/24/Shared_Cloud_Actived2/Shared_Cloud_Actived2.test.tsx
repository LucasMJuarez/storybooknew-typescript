import React from 'react';
import {shallow} from 'enzyme';
import Shared_Cloud_Actived2 from './Shared_Cloud_Actived2';

const mockFn = jest.fn();
it('Shared_Cloud_Actived2 is an svg', () => {
    const wrapper = shallow(<Shared_Cloud_Actived2 onClick={mockFn} />);
    expect(wrapper.type()).toEqual('svg');
});

it('Shared_Cloud_Actived2 is 24x24', () => {
    const wrapper = shallow(<Shared_Cloud_Actived2 onClick={mockFn} />);
    expect(wrapper.prop('width')).toEqual('21px');
    expect(wrapper.prop('height')).toEqual('21px');
});

it('Shared_Cloud_Actived2 onClick props', () => {
    const wrapper = shallow(<Shared_Cloud_Actived2 onClick={mockFn} />);
    expect(wrapper.simulate('click')).toBeTruthy();
});
