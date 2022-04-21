import React from 'react';
import {shallow} from 'enzyme';
import TextNumber from './TextNumber';

it('is truthy', () => {
    expect(TextNumber).toBeTruthy();
});
it('renders components ok', () => {
    const wrapper = shallow(<TextNumber primaryText='63745848' title='Número de Reclamo' secondaryText='Línea 11 4255 1105' />);
    expect(wrapper.type()).toEqual('div');
});
