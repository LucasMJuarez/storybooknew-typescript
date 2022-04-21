import React from 'react';
import {shallow} from 'enzyme';
import TopupBalance from './TopupBalance';

it('TopupBalance is an svg', () => {
    const wrapper = shallow(<TopupBalance />);
    expect(wrapper.type()).toEqual('svg');
});
