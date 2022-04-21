import React from 'react';
import {shallow} from 'enzyme';
import GestionTickets from './GestionTickets';

it('GestionTickets is an svg', () => {
    const wrapper = shallow(<GestionTickets />);
    expect(wrapper.type()).toEqual('svg');
});

it('GestionTickets is 32x32', () => {
    const wrapper = shallow(<GestionTickets />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
