import React from 'react'
import TextArea from './TextArea'
import { shallow } from 'enzyme';
import {findByTestAttr} from '../../utils/helpers'


test('renders without error', () => {
    const childrenMock = 'Prueba'
    const wrapper = shallow (<TextArea children={childrenMock} onClick={jest.fn()}/>)
    const componentTextArea = findByTestAttr(wrapper, 'text-area-component')
    expect(componentTextArea.length).toBe(1)
})