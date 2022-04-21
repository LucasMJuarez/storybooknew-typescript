import React from 'react';
import {shallow, render} from 'enzyme';
import ButtonLink from '.';
import Title from '../../../TextCatalog/HEADLINE';
import Description from '../../../TextCatalog/TITLE';
import Button from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';
import NotificationInfo from '../../../Assets/64/NotificationInfo';

let mockFn = jest.fn();
let mockLinkFn = jest.fn();

const defaultProps = {
    title: 'Recarga de saldo pendiente',
    description: 'Por favor, intentá de nuevo más tarde.',
    buttonLabel: 'Volver a mi línea',
    terminosText: 'Al continuar, confirmás que leíste y aceptás nuestros ',
    markedText: 'términos y condiciones.',
    onClick: mockFn,
    onClickLink: mockLinkFn,
};

it('renders every component', () => {
    const wrapper = shallow(<ButtonLink {...defaultProps} />);
    expect(wrapper.find(NotificationInfo)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Description)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
});

it('renders every component with custom content', () => {
    const wrapper = shallow(<ButtonLink {...defaultProps} />);
    expect(wrapper.find(Title).prop('text')).toEqual(defaultProps.title);
    expect(wrapper.find(Description).prop('text')).toEqual(defaultProps.description);
    expect(wrapper.find(Button).prop('text')).toEqual(defaultProps.buttonLabel);
});

it('functional button', () => {
    const wrapper = shallow(<ButtonLink {...defaultProps} />);
    expect(defaultProps.onClick.mock.calls.length).toEqual(0);
    wrapper.find(Button).simulate('click');
    expect(defaultProps.onClick.mock.calls.length).toEqual(1);
    wrapper.find(Button).simulate('click');
    wrapper.find(Button).simulate('click');
    expect(defaultProps.onClick.mock.calls.length).toEqual(3);
});
