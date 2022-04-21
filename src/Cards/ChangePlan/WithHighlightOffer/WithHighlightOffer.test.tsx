import React from 'react';
import { shallow } from 'enzyme';
import WithHighlightOffer from './WithHighlightOffer';

it('is truthy', () => {
    expect(WithHighlightOffer).toBeTruthy();
});
it('renders children components ok', () => {
    const child = <div>Child!</div>;
    const wrapper = shallow(<WithHighlightOffer children={child} />);
    expect(wrapper.text()).toContain('Child!');
    expect(wrapper.type()).toEqual('div');
});
