import * as React from 'react';
import {shallow, render} from 'enzyme';
import Secondary from './Secondary';
import Spinner from '../../../../Resources/Spinners/24';
import styles from './Secondary.styles';
import BaseButton from '../../../BaseButton';
import Body from '../../../../TextCatalog/BODY';

let {container, button, button_inverse, inverse_loading, button_flex_end, button_full_width} = styles;
const mockFn = jest.fn();

describe('renders children ok', () => {
    it('renders nomal state ok', () => {
        const wrapper = shallow(<Secondary onClick={mockFn} text='My button!' />);
        expect(wrapper.find(BaseButton)).toBeTruthy();
        expect(wrapper.find(Body)).toBeTruthy();
        expect(wrapper.find(Body).prop('type')).toEqual('text_button_secondary');
    });
    it('renders inner text ok', () => {
        const buttonText = 'My button!';
        const wrapper = render(<Secondary onClick={mockFn} text={buttonText} />);
        expect(wrapper.text()).toContain(buttonText);
  });
    it('renders disabled state ok', () => {
        const wrapperDisabled = shallow(<Secondary disabled onClick={mockFn} text='My button' />);
        expect(wrapperDisabled.find(Body).prop('type')).toEqual('text_button_secondary_disabled');
    });
    it('does not render spinner if not loading', () => {
        const wrapper = shallow(<Secondary onClick={mockFn} text='My button!' />);
        expect(wrapper.find(Spinner)).toHaveLength(0);
    });
    it('renders spinner state ok', () => {
        const wrapper = shallow(<Secondary loading onClick={mockFn} text='My button!' />);
        expect(wrapper.find(Spinner)).toHaveLength(1);
        expect(wrapper.find(Spinner).prop('inverse')).toBeFalsy();
    });
    it('renders inverse state ok', () => {
        const wrapper = shallow(<Secondary inverse onClick={mockFn} text='My button!' />);
        expect(wrapper.find(Body).prop('type')).toEqual('text_button_secondary_inverse');
    });
});
describe('renders inverse styles', () => {
    it('inverse prop renders inverse styles', () => {
        const wrapper = shallow(<Secondary inverse onClick={mockFn} text='My button!' />);
        expect(wrapper.childAt(0).hasClass(button)).toBeTruthy();
        expect(wrapper.childAt(0).hasClass(button_inverse)).toBeTruthy();
        expect(wrapper.childAt(0).hasClass(button_flex_end)).toBeFalsy();
        expect(wrapper.childAt(0).hasClass(button_full_width)).toBeFalsy();
    });
    it('inverse loading prop renders inverse loading styles', () => {
        const wrapper = shallow(<Secondary inverse loading onClick={mockFn} text='My button!' />);
        expect(wrapper.childAt(0).hasClass(inverse_loading)).toBeTruthy();
    });
});
