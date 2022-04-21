import React from 'react';
import {shallow} from 'enzyme';
import TwoL from './TwoL';

const mockFn = jest.fn();

const wrapper = shallow(
    <TwoL
        asset={'Mobile'}
        primaryText='Primary'
        secondaryText='Secondary'
        hideCheckbox={false}
        onClick={mockFn}
        active={false}
    />
);

it('is truthy', () => {
    expect(TwoL).toBeTruthy();
});
it('Have one PlaceHolder', () => {
    expect(wrapper.find('PlaceHolder').length).toBe(1);
});
it("Have primaryText 'Primary' and secondaryText 'Secondary'", () => {
    expect(wrapper.find('Text16R').prop('text')).toContain('Primary');
    expect(wrapper.find('Text14R').prop('text')).toContain('Secondary');
});
it('On first render draw CheckboxOff', () => {
    expect(wrapper.children().find('CheckboxOff')).not.toBeUndefined();
    expect(wrapper.children().find('CheckboxOff')).not.toBeNull();
});
it('Triggers passed function onClick', () => {
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
});
it('On first render draw CheckboxOff', () => {
    const wrapperOn = shallow(
        <TwoL
            asset={'Mobile'}
            primaryText='Primary'
            secondaryText='Secondary'
            hideCheckbox={false}
            onClick={mockFn}
            active={true}
        />
    );
    expect(wrapperOn.children().find('CheckboxOn')).not.toBeUndefined();
    expect(wrapperOn.children().find('CheckboxOn')).not.toBeNull();
});
it('When hide checkbox not render checkbox off or on', () => {
    const wrapperHide = shallow(
        <TwoL asset={'Mobile'} primaryText='Primary' secondaryText='Secondary' hideCheckbox={true} active={false} />
    );
    expect(wrapper.children().find('CheckboxOff')).toEqual({});
    expect(wrapperHide.children().find('CheckboxOn')).toEqual({});
});
