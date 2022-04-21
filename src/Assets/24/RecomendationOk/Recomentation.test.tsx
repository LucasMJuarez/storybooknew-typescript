import React from 'react'
import { shallow } from 'enzyme'
import RecomendationOk from './Recomendation'

it('Component reder fine', () => {
    const wrapper = shallow(<RecomendationOk />);
    expect(wrapper.type()).toEqual('svg')

})