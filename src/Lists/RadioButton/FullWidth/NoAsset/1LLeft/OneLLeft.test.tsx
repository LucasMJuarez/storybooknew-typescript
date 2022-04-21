import React from 'react';
import {shallow} from 'enzyme';
import OneLLeft from './OneLLeft';

const mockFn = jest.fn();

const wrapper = shallow(<OneLLeft text='Texto' active={false} onClick={mockFn} />);

it('is truthy', () => {
    expect(OneLLeft).toBeTruthy();
});

it('Have Primary16R ', () => {
    expect(wrapper.find('Primary16R').prop('text')).toContain('Texto');
});

it('Have SlimLineCentered ', () => {
    expect(wrapper.find('SlimLineCentered').length).toBe(0);
});

it('On first render draw RadioOff', () => {
    expect(wrapper.children().find('RadioOff')).not.toBeUndefined();
    expect(wrapper.children().find('RadioOff')).not.toBeNull();
});

it('Render draw RadioOn', () => {
    const wrapperOn = shallow(<OneLLeft text='Texto' onClick={mockFn} active={true} />);
    expect(wrapperOn.children().find('RadioOn')).not.toBeUndefined();
    expect(wrapperOn.children().find('RadioOn')).not.toBeNull();
});
it('When showLine is false not render SlimLineCentered', () => {
    const wrapperWithoutLine = shallow(<OneLLeft text='Texto' onClick={mockFn} active={false} />);
    expect(wrapperWithoutLine.find('SlimLineCentered').length).toBe(0);
});
