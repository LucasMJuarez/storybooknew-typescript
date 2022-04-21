import React from 'react';
import {shallow} from 'enzyme';
import Options from './Options';

it('Options is an svg', () => {
    const wrapper = shallow(<Options />);
    expect(wrapper.type()).toEqual('svg');
});
