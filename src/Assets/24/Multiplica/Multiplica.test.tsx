import React from 'react';
import {shallow} from 'enzyme';
import Multiplica from './Multiplica';

it('Multiplica is an svg', () => {
    const wrapper = shallow(<Multiplica />);
    expect(wrapper.type()).toEqual('svg');
});

it('Multiplica is 24x24', () => {
    const wrapper = shallow(<Multiplica />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
