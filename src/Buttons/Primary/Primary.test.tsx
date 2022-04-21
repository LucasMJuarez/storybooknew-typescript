/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {shallow} from 'enzyme';
import Primary from '.';
import Spinner from '../../Resources/Spinners/24';
import styles from './Primary.styles';

let {button, button_inverse} = styles;
const mockFn = jest.fn();
it('inverse prop renders inverse styles ', () => {
    const wrapper = shallow(<Primary inverse onClick={mockFn} text='My button!' />);
    expect(wrapper.childAt(0).hasClass(button));
    expect(wrapper.childAt(0).hasClass(button_inverse));
});

it('does not render spinner if not loading', () => {
    const wrapper = shallow(<Primary onClick={mockFn} text='My button!' />);
    expect(wrapper.find(Spinner)).toHaveLength(0);
});
it('renders spinner on loading', () => {
    const wrapper = shallow(<Primary loading onClick={mockFn} text='My button!' />);
    expect(wrapper.find(Spinner)).toHaveLength(1);
});
