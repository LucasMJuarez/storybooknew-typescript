/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {render, shallow} from 'enzyme';
import BaseButton from './BaseButton';
import styles from './BaseButton.styles';

let mockFn = jest.fn();
it('renders children ok', () => {
    const Children = () => <div>Hola!</div>;
    const wrapper = render(
        <BaseButton onClick={mockFn}>
            <Children />
        </BaseButton>
    );
    expect(wrapper.text()).toContain('Hola!');
});

it('triggers passed function onClick', () => {
    const wrapper = shallow(<BaseButton onClick={mockFn} />);
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
});

describe('disable behaviour works ok', () => {
    it('disables when disabled prop is passed in', () => {
        const wrapper = shallow(<BaseButton onClick={mockFn} disabled />);
        expect(wrapper.props().disabled).toBeTruthy();
    });

    it('disables when loading and disableOnLoading props are passed in', () => {
        const wrapper = shallow(<BaseButton onClick={mockFn} disableOnLoading loading />);
        expect(wrapper.props().disabled).toBeTruthy();
    });
});

describe('style props are rendered ok', () => {
    it('renders with default button class', () => {
        const button = styles.button;
        const wrapper = shallow(<BaseButton onClick={mockFn} />);
        expect(wrapper.props().className).toEqual(button);
    });
    it('renders with custom class', () => {
        const customClass = 'customClassName';
        const wrapper = shallow(<BaseButton onClick={mockFn} className={customClass} />);
        expect(wrapper.props().className).toContain(customClass);
    });
    it('renders with custom style', () => {
        const green = {backgroundColor: 'green'};
        const wrapper = shallow(<BaseButton onClick={mockFn} style={green} />);
        expect(wrapper.props().style).toEqual(green);
    });
});
