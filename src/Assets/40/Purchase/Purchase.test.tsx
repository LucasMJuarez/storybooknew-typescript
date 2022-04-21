import React from 'react';
import {shallow} from 'enzyme';
import Purchase from './Purchase';

it('Purchase is an svg', () => {
    const wrapper = shallow(<Purchase />);
    expect(wrapper.type()).toEqual('svg');
});
