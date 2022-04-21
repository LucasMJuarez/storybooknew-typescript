import React from 'react';
import {shallow} from 'enzyme';
import Data_Negative from './Data_Negative';

it('Data_Negative is an svg', () => {
    const wrapper = shallow(<Data_Negative />);
    expect(wrapper.type()).toEqual('svg');
});
