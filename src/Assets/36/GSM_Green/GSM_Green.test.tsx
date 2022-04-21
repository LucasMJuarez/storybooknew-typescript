import React from 'react';
import {shallow} from 'enzyme';
import GSM_Green from './GSM_Green';

it('GSM_Green is an svg', () => {
    const wrapper = shallow(<GSM_Green />);
    expect(wrapper.type()).toEqual('svg');
});
