import React from 'react';
import {shallow} from 'enzyme';
import Tv from './Tv';

it('Tv is an svg', () => {
    const wrapper = shallow(<Tv />);
    expect(wrapper.type()).toEqual('svg');
});
