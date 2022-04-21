import React from 'react';
import {shallow} from 'enzyme';
import ChangeTariff from './ChangeTariff';

it('ChangeTariff is an svg', () => {
    const wrapper = shallow(<ChangeTariff />);
    expect(wrapper.type()).toEqual('svg');
});

it('ChangeTariff is 32x32', () => {
    const wrapper = shallow(<ChangeTariff />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
