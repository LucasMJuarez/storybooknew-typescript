import React from 'react';
import {shallow} from 'enzyme';
import Data from './Data';

it('Data is an svg', () => {
    const wrapper = shallow(<Data />);
    expect(wrapper.type()).toEqual('svg');
});
