import * as React from 'react';
import {shallow, render} from 'enzyme';
import Action from '.';

const mockFn = jest.fn();
const primaryText = 'lorem ipsum dolor sit amet, consectetur adip';
const secondaryText = 'My button!';

it('renders Action primaryText && secondaryText ok', () => {
    const wrapper = render(<Action onClick={mockFn} text={primaryText} buttonText={secondaryText} />);
    expect(wrapper.text()).toContain(primaryText);
});

it('Action onClick props', () => {
    const wrapper = shallow(<Action onClick={mockFn} text={primaryText} buttonText={secondaryText} />);
    expect(wrapper.simulate('click')).toBeTruthy();
});
