import React from 'react';
import {shallow} from 'enzyme';
import Tariff from './Tariff';

it('Tariff is an svg', () => {
    const wrapper = shallow(<Tariff title='3GB' />);
    expect(wrapper.children().first().type()).toEqual('svg');
});

it('Tariff is 96x96', () => {
    const wrapper = shallow(<Tariff title='3GB' />);
    expect(wrapper.children().first().prop('width')).toEqual('96');
    expect(wrapper.children().first().prop('height')).toEqual('97');
});
