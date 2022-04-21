import React from 'react';
import {shallow} from 'enzyme';
import Profile from './Profile';

it('is truthy', () => {
    expect(Profile).toBeTruthy();
});
it('renders children components ok', () => {
    const child = <div>Child!</div>;
    const wrapper = shallow(<Profile children={child} primaryText='Diego' secondaryText='10' onClick={() => {}} />);
    expect(wrapper.text()).toContain('Child!');
    expect(wrapper.type()).toEqual('div');
});
