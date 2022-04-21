import * as React from 'react';
import {shallow, render} from 'enzyme';
import OneButton from '.';
import Spinner from '../../../../Resources/Spinners/24';
import styles from './OneButton.styles';

let {container, button, button_inverse} = styles;
const mockFn = jest.fn();
it('inverse prop renders inverse styles ', () => {
    const wrapper = shallow(<OneButton inverse onClick={mockFn} text='My button!' />);
    expect(wrapper.childAt(0).dive().hasClass(container));
    expect(wrapper.childAt(0).dive().hasClass(button));
    expect(wrapper.childAt(0).dive().hasClass(button_inverse));
});
it('renders inner text ok', () => {
    const buttonText = 'My button!';
    const wrapper = render(<OneButton onClick={mockFn} text={buttonText} />);
    expect(wrapper.text()).toContain(buttonText);
});
it('does not render spinner if not loading', () => {
    const wrapper = shallow(<OneButton onClick={mockFn} text='My button!' />);
    expect(wrapper.find(Spinner)).toHaveLength(0);
});
it('renders spinner on loading', () => {
    const wrapper = shallow(<OneButton loading onClick={mockFn} text='My button!' />);
    expect(wrapper.find(Spinner)).toHaveLength(1);
});
