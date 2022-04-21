import React from 'react';
import {shallow} from 'enzyme';
import TopupCreditcard from './TopupCreditcard';

it('TopupCreditcard is an svg', () => {
    const wrapper = shallow(<TopupCreditcard />);
    expect(wrapper.type()).toEqual('svg');
});

it('TopupCreditcard is 32x32', () => {
    const wrapper = shallow(<TopupCreditcard />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
