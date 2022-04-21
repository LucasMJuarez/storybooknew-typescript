import React from 'react';
import {shallow} from 'enzyme';
import TopupCreditcard from './TopupCreditcard';

it('TopupCreditcard is an svg', () => {
    const wrapper = shallow(<TopupCreditcard />);
    expect(wrapper.type()).toEqual('svg');
});
