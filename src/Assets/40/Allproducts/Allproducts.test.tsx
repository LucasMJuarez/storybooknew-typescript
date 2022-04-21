import React from 'react';
import {shallow} from 'enzyme';
import Allproducts from './Allproducts';

it('Allproducts is an svg', () => {
    const wrapper = shallow(<Allproducts />);
    expect(wrapper.type()).toEqual('svg');
});
