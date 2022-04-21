/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {shallow} from 'enzyme';
import Small from '.';
import styles from './Small.styles';
import BaseButton from '../../BaseButton';
import Body from '../../../TextCatalog/BODY';
let {button, buttonInverse} = styles;
const mockFn = jest.fn();
describe('renders children ok', () => {
    it('renders normal state ok', () => {
        const wrapper = shallow(<Small onClick={mockFn} text='My button!' />);
        expect(wrapper.find(BaseButton)).toBeTruthy();
        expect(wrapper.find(Body)).toBeTruthy();
        expect(wrapper.find(Body).prop('type')).toEqual('text_button_primary_small');
    });
    it('renders inverse state ok', () => {
        const wrapperInverse = shallow(<Small inverse onClick={mockFn} text='My button!' />);
        expect(wrapperInverse.find(Body).prop('type')).toEqual('text_button_primary_small_inverse');
    });
});

it('inverse prop renders inverse styles ', () => {
    const wrapper = shallow(<Small inverse onClick={mockFn} text='My button!' />);
    expect(wrapper.childAt(0).hasClass(button));
    expect(wrapper.childAt(0).hasClass(buttonInverse));
});
