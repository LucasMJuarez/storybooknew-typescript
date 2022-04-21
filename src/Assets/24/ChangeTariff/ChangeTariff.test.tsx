import React from 'react';
import {shallow} from 'enzyme';
import ChangeTariff from './ChangeTariff';

it('ChangeTariff is an svg', () => {
    const wrapper = shallow(<ChangeTariff />);
    expect(wrapper.type()).toEqual('svg');
});

it('ChangeTariff is 24x24', () => {
    const wrapper = shallow(<ChangeTariff />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
