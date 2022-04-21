import React from 'react';
import {shallow} from 'enzyme';
import WomanDesk from './WomanDesk';

it('WomanDesk is an svg', () => {
    const wrapper = shallow(<WomanDesk />);
    expect(wrapper.type()).toEqual('svg');
});
