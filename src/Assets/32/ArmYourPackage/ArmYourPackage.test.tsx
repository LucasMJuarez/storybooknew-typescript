import React from 'react';
import {shallow} from 'enzyme';
import ArmYourPackage from './ArmYourPackage';

it('ArmYourPackage is an svg', () => {
    const wrapper = shallow(<ArmYourPackage />);
    expect(wrapper.type()).toEqual('svg');
});

it('ArmYourPackage is 32x32', () => {
    const wrapper = shallow(<ArmYourPackage />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
