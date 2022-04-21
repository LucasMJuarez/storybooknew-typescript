import React from 'react';
import {shallow} from 'enzyme';
import Boxed from './Boxed';

it('is truthy', () => {
    expect(Boxed).toBeTruthy();
});
it('renders children components ok', () => {
    const child = <div>Child!</div>;
    const wrapper = shallow(<Boxed children={child} />);
    expect(wrapper.text()).toContain('Child!');
    expect(wrapper.type()).toEqual('div');
});
