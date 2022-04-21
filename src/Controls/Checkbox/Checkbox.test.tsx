import React from 'react';
import {shallow} from 'enzyme';
import Checkbox from './Checkbox';

it('Checkbox is an svg', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.type()).toEqual('svg');
});

it('Checkbox is 24x24', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});

it('Checkbox is blue', () => {
    const blueColor = '#1068bf';
    const wrapper = shallow(<Checkbox checkboxColor={blueColor} />);
    expect(wrapper.find('[fill]').at(1).prop('fill')).toEqual(blueColor);
});