import React from 'react';
import {shallow} from 'enzyme';
import ProductPlaceholder01 from './ProductPlaceholder01';

it('ProductPlaceholder01 is an svg', () => {
    const wrapper = shallow(<ProductPlaceholder01 />);
    expect(wrapper.type()).toEqual('svg');
});
