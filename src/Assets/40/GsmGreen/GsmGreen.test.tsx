import React from 'react'
import { shallow } from 'enzyme'
import GsmGreen from './GsmGreen'

it('Component render fine', () => {
    const wrapper = shallow(<GsmGreen />)
    expect(wrapper.type()).toEqual('svg')
}) 