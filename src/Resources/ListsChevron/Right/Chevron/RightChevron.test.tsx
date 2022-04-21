import React from 'react';
import { shallow } from 'enzyme';
import RightChevron from './RightChevron';
import FullWidth from '../../../../Layouts/FullWidth/FullWidth';
import Right from '../../../../Assets/24/Chevron/Right';
import Down from '../../../../Assets/24/Chevron/Down';
import Top from '../../../../Assets/24/Chevron/Top';

it('is truthy', () => {
    expect(RightChevron).toBeTruthy();
});

it('renders children default component ok', () => {
    const wrapper = shallow(<RightChevron />);
    expect(wrapper.children().contains(<Right />)).toEqual(true)
});

it('renders Down children component ok', () => {
    const wrapper = shallow(<RightChevron item={<Down />}/>);
    expect(wrapper.children().contains(<Down />)).toEqual(true)
});

it('renders Top children component ok', () => {
    const wrapper = shallow(<RightChevron item={<Top />}/>);
    expect(wrapper.children().contains(<Top />)).toEqual(true)
});
