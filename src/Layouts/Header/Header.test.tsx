import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

it('is truthy', () => {
    expect(Header).toBeTruthy();
});
it('renders children components ok', () => {
    const child = <div>Child!</div>;
    const wrapper = shallow(<Header children={child} />);
    expect(wrapper.text()).toContain('Child!');
    expect(wrapper.type()).toEqual('div');
});
