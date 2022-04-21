import * as React from 'react';
import {shallow, render} from 'enzyme';
import Primary from './Primary';
import Spinner from '../../../../Resources/Spinners/24';
import styles from './Primary.styles';


let {container, button, button_inverse, button_flex_end, button_full_width} = styles;
const mockFn = jest.fn();
it('inverse prop renders inverse styles ', () => {
    const wrapper = shallow(<Primary inverse onClick={mockFn} text='My button!' />);
    expect(wrapper.childAt(0).dive().hasClass(container));
    expect(wrapper.childAt(0).dive().hasClass(button));
    expect(wrapper.childAt(0).dive().hasClass(button_inverse));
    expect(wrapper.childAt(0).dive().hasClass(button_flex_end));
    expect(wrapper.childAt(0).dive().hasClass(button_full_width));
});
it('renders inner text ok', () => {
    const buttonText = 'My button!';
    const wrapper = render(<Primary onClick={mockFn} text={buttonText} />);
    expect(wrapper.text()).toContain(buttonText);
});
it('does not render spinner if not loading', () => {
    const wrapper = shallow(<Primary onClick={mockFn} text='My button!' />);
    expect(wrapper.find(Spinner)).toHaveLength(0);
});
it('renders spinner on loading', () => {
    const wrapper = shallow(<Primary loading onClick={mockFn} text='My button!' />);
    expect(wrapper.find(Spinner)).toHaveLength(1);
});


