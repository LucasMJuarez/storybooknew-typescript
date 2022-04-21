import React from 'react';
import {shallow} from 'enzyme';
import AlertWarning from './AlertWarning';

it('AlertWarning is an svg', () => {
    const wrapper = shallow(<AlertWarning />);
    expect(wrapper.type()).toEqual('svg');
});

it('AlertWarning is 24x24', () => {
    const wrapper = shallow(<AlertWarning />);
    expect(wrapper.prop('width')).toEqual('24');
    expect(wrapper.prop('height')).toEqual('24');
});
