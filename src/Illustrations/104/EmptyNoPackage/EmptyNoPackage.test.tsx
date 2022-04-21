import React from 'react';
import {shallow} from 'enzyme';
import EmptyData from './EmptyNoPackage';

it('EmptyNoPackage is an svg', () => {
    const wrapper = shallow(<EmptyData />);
    expect(wrapper.type()).toEqual('svg');
});
