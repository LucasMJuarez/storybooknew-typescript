import React from 'react';
import { shallow } from 'enzyme';
import EmptyError from './EmptyError';

it('EmptyError is an svg', () => {
    const wrapper = shallow(<EmptyError />);
    expect(wrapper.type()).toEqual('svg');
});
