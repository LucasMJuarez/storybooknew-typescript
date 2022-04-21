import React from 'react';
import {shallow} from 'enzyme';
import Lists from './Lists';

it('Lists is an svg', () => {
    const wrapper = shallow(<Lists />);
    expect(wrapper.childAt(0).type()).toEqual('svg');
});
