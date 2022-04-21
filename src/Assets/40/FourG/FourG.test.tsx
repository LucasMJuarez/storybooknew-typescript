import React from 'react'
import { shallow } from 'enzyme'
import FourG from './FourG'

it('Component render fine', () => {
    const wrapper = shallow(<FourG />)
    expect(wrapper.type()).toEqual('svg')
}) 