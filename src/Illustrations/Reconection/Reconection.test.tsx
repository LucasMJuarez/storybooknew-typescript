import React from 'react';
import {shallow} from 'enzyme';
import Reconection from './Reconection';

it('Reconection is an svg', () => {
    const wrapper = shallow(<Reconection />);
    expect(wrapper.type()).toEqual('svg');
});
