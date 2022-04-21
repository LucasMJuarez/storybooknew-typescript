import * as React from 'react';
import {shallow, render} from 'enzyme';
import Normal from '.';

const mockFn = jest.fn();
it('renders Normal primaryText && secondaryText ok', () => {
    const primaryText = 'lorem ipsum dolor sit amet, consectetur adip';
    const secondaryText = 'My button!';
    const wrapper = render(<Normal onClick={mockFn} text={primaryText} buttonText={secondaryText} />);
    expect(wrapper.text()).toContain(primaryText);
});
