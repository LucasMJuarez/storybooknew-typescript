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
    it('renders nomal state ok', () => {
        const wrapper = shallow(<Small onClick={mockFn} text='My button!' />);
        expect(wrapper.find(BaseButton)).toBeTruthy();
        expect(wrapper.find(Body)).toBeTruthy();
        expect(wrapper.find(Body).prop('type')).toEqual('text_button_secondary_small');
    });
    it('renders disabled state ok', () => {
        const wrapperDisabled = shallow(<Small disabled onClick={mockFn} text='My button' />);
        expect(wrapperDisabled.find(Body).prop('type')).toEqual('text_button_secondary_small_disabled');
    });
    it('renders inverse state ok', () => {
        const wrapperInverse = shallow(<Small inverse onClick={mockFn} text='My button!' />);
        expect(wrapperInverse.find(Body).prop('type')).toEqual('text_button_secondary_small_inverse');
    });
    it('renders inverse disabled state ok', () => {
        const wrapperInverseDisabled = shallow(<Small inverse disabled onClick={mockFn} text='My button!' />);
        expect(wrapperInverseDisabled.find(Body).prop('type')).toEqual('text_button_secondary_small_inverse_disabled');
    });
});

it('inverse prop renders inverse styles ', () => {
    const wrapper = shallow(<Small inverse onClick={mockFn} text='My button!' />);
    expect(wrapper.childAt(0).hasClass(button));
    expect(wrapper.childAt(0).hasClass(buttonInverse));
});
