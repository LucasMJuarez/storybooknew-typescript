import React from 'react';
import {shallow} from 'enzyme';
import FullWidth from './FullWidth';

it('is truthy', () => {
    expect(FullWidth).toBeTruthy();
});
it('renders children components ok', () => {
    const child = <div>Child!</div>;
    const wrapper = shallow(<FullWidth children={child} />);
    expect(wrapper.text()).toContain('Child!');
    expect(wrapper.type()).toEqual('div');
});
