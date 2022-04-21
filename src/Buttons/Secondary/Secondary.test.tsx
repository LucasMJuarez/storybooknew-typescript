/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {shallow} from 'enzyme';
import Secondary from '.';
import Spinner from '../../Resources/Spinners/24';
import styles from './Secondary.styles';
import BaseButton from '../BaseButton';
import Body from '../../TextCatalog/BODY';
let {button, button_inverse, inverse_loading} = styles;
const mockFn = jest.fn();
describe('renders children ok', () => {
    it('renders nomal state ok', () => {
        const wrapper = shallow(<Secondary onClick={mockFn} text='My button!' />);
        expect(wrapper.find(BaseButton)).toBeTruthy();
        expect(wrapper.find(Body)).toBeTruthy();
        expect(wrapper.find(Body).prop('type')).toEqual('text_button_secondary');
    });
    it('renders loading state ok', () => {
        const wrapperLoading = shallow(<Secondary onClick={mockFn} loading text='My button!' />);
        expect(wrapperLoading.find(Spinner)).toBeTruthy();
        expect(wrapperLoading.find(Spinner).prop('inverse')).toBeFalsy();
    });
    it('renders disabled state ok', () => {
        const wrapperDisabled = shallow(<Secondary disabled onClick={mockFn} text='My button' />);
        expect(wrapperDisabled.find(Body).prop('type')).toEqual('text_button_secondary_disabled');
    });
    it('renders inverse state ok', () => {
        const wrapperInverse = shallow(<Secondary inverse onClick={mockFn} text='My button!' />);
        expect(wrapperInverse.find(Body).prop('type')).toEqual('text_button_secondary_inverse');
    });
    it('renders inverse loading state ok', () => {
        const wrapperInverseLoading = shallow(<Secondary inverse loading onClick={mockFn} text='My button!' />);
        expect(wrapperInverseLoading.find(Body).prop('type')).toEqual('text_button_secondary_inverse');
        expect(wrapperInverseLoading.find(Spinner)).toBeTruthy();
        expect(wrapperInverseLoading.find(Spinner).prop('inverse')).toBeTruthy();
    });
    it('renders inverse disabled state ok', () => {
        const wrapperInverseDisabled = shallow(<Secondary inverse disabled onClick={mockFn} text='My button!' />);
        expect(wrapperInverseDisabled.find(Body).prop('type')).toEqual('text_button_secondary_inverse_disabled');
    });
});

it('inverse prop renders inverse styles ', () => {
    const wrapper = shallow(<Secondary inverse onClick={mockFn} text='My button!' />);
    expect(wrapper.childAt(0).hasClass(button));
    expect(wrapper.childAt(0).hasClass(button_inverse));
});
it('loading prop renders loading styles', () => {
    const wrapper = shallow(<Secondary loading onClick={mockFn} text='My button!' />);
    expect(wrapper.childAt(0).hasClass(inverse_loading));
});
