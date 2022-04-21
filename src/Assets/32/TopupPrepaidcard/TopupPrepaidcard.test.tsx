import React from 'react';
import {shallow} from 'enzyme';
import TopupPrepaidcard from './TopupPrepaidcard';

it('TopupPrepaidcard is an svg', () => {
    const wrapper = shallow(<TopupPrepaidcard />);
    expect(wrapper.type()).toEqual('svg');
});

it('TopupPrepaidcard is 32x32', () => {
    const wrapper = shallow(<TopupPrepaidcard />);
    expect(wrapper.prop('width')).toEqual('32');
    expect(wrapper.prop('height')).toEqual('32');
});
