import React from 'react';
import {shallow} from 'enzyme';
import OneL from './OneL';

const mockFn = jest.fn();

const wrapper = shallow(<OneL text='Texto' active={false} showLine={true} onClick={mockFn} />);

it('is truthy', () => {
    expect(OneL).toBeTruthy();
});

it('Have Primary16R ', () => {
    expect(wrapper.find('Primary16R').prop('text')).toContain('Texto');
});

it('Have SlimLineCentered ', () => {
    expect(wrapper.find('SlimLineCentered').length).toBe(1);
});

it('On first render draw RadioOff', () => {
    expect(wrapper.children().find('RadioOff')).not.toBeUndefined();
    expect(wrapper.children().find('RadioOff')).not.toBeNull();
});

it('Render draw RadioOn', () => {
    const wrapperOn = shallow(<OneL text='Texto' showLine={true} onClick={mockFn} active={true} />);
    expect(wrapperOn.children().find('RadioOn')).not.toBeUndefined();
    expect(wrapperOn.children().find('RadioOn')).not.toBeNull();
});
it('When showLine is false not render SlimLineCentered', () => {
    const wrapperWithoutLine = shallow(<OneL text='Texto' showLine={false} onClick={mockFn} active={false} />);
    expect(wrapperWithoutLine.find('SlimLineCentered').length).toBe(0);
});
