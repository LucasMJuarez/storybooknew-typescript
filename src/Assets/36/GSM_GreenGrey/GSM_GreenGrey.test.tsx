import React from 'react';
import {shallow} from 'enzyme';
import GSM_GreenGrey from './GSM_GreenGrey';

it('GSM_Green is an svg', () => {
    const wrapper = shallow(<GSM_GreenGrey />);
    expect(wrapper.type()).toEqual('svg');
});
