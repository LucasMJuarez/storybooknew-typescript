import React from 'react';
import {shallow, render} from 'enzyme';
import ErrorFeedback from '.';
import Title from '../../../TextCatalog/HEADLINE';
import Description from '../../../TextCatalog/TITLE';
import Button from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';

let mockFn = jest.fn();
const defaultProps = {
    title: 'My title',
    description: 'My Description',
    buttonLabel: 'My button',
    onClick: mockFn,
};
const DEFAULT = {
    headline: 'Ha ocurrido un error',
    title: 'Te pedimos que vuelvas a intentar más tarde. Disculpá las molestias.',
    buttonLabel: 'Volver a mi línea',
};
it('renders every component', () => {
    const wrapper = shallow(<ErrorFeedback {...defaultProps} />);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
});

it('renders default props', () => {
    const wrapper = render(<ErrorFeedback onClick={defaultProps.onClick} />);
    expect(wrapper.text()).toContain(DEFAULT.headline);
    expect(wrapper.text()).toContain(DEFAULT.title);
    expect(wrapper.text()).toContain(DEFAULT.buttonLabel);
});
