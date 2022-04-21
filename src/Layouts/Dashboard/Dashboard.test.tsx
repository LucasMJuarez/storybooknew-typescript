import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from './Dashboard';

it('is truthy', () => {
    expect(Dashboard).toBeTruthy();
});
it('renders children components ok', () => {
    const child = <div>Child!</div>;
    const wrapper = shallow(<Dashboard children={child} />);
    expect(wrapper.text()).toContain('Child!');
    expect(wrapper.type()).toEqual('div');
});
