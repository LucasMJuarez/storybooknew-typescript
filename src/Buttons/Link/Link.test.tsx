/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import {mount, shallow} from 'enzyme';
import Link from './Link';
import BaseButton from '../BaseButton';
const mockFn = jest.fn();

it('renders BaseButton', () => {
    const text = 'My Button';
    const wrapper = shallow(<Link text={text} onClick={mockFn} />);
    expect(wrapper.find(BaseButton).length).toBe(1);
});
it('renders disabled text on disabled state', () => {
    const text = 'My Button';
    const wrapper = mount(<Link text={text} onClick={mockFn} disabled />);
    expect(wrapper.find('Sub').props().type).toEqual('text_link_disabled');
});
it('renders proper text style in normal state', () => {
    const text = 'My Button';
    const wrapper = mount(<Link text={text} onClick={mockFn} />);
    expect(wrapper.find('Sub').props().type).toEqual('text_link');
});
