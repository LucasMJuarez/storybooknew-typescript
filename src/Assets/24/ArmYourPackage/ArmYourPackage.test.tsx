import React from 'react';
import {shallow} from 'enzyme';
import ArmYourPackage from './ArmYourPackage';

it('ArmYourPackage is an svg', () => {
    const wrapper = shallow(<ArmYourPackage />);
    expect(wrapper.type()).toEqual('svg');
});

it('ArmYourPackage is 24x24', () => {
    const wrapper = shallow(<ArmYourPackage />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
