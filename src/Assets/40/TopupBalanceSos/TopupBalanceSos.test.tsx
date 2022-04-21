import React from 'react';
import {shallow} from 'enzyme';
import TopupBalanceSos from './TopupBalanceSos';

it('TopupBalanceSos is an svg', () => {
    const wrapper = shallow(<TopupBalanceSos />);
    expect(wrapper.type()).toEqual('svg');
});
