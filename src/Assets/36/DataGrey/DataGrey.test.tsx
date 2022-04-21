import React from 'react';
import {shallow} from 'enzyme';
import DataGrey from './DataGrey';

it('Data is an svg', () => {
    const wrapper = shallow(<DataGrey />);
    expect(wrapper.type()).toEqual('svg');
});
