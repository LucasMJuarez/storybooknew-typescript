import React from 'react'
import { shallow } from 'enzyme'
import LandLineInvoice from './LandLineInvoice'

it('Component render fine', () => {
    const wrapper = shallow(<LandLineInvoice />)
    expect(wrapper.type()).toEqual('svg')
}) 
it('LandLineInvoice is 40x40', () => {
    const wrapper = shallow(<LandLineInvoice />);
    expect(wrapper.prop('width')).toEqual('40');
    expect(wrapper.prop('height')).toEqual('40');
});
