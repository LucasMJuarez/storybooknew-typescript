import React from 'react';
import { shallow } from 'enzyme';
import NotificationInfo from '../../../Assets/64/NotificationInfo';
import Headline from '../../../TextCatalog/HEADLINE';
import Feedback from '../../../Buttons/Link/Feedback';
import OneButton from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';
import DescriptionLink from '.';

let mockFnButton = jest.fn();
let mockFnLink = jest.fn();
const defaultProps = {
    title: 'Título de la pantalla que resume la situación',
    description: 'Ver motivos de la situación.',
    descriptionOnClick: mockFnLink,
    buttonLabel: 'Volver a mi línea',
    onClick: mockFnButton,
};

describe('testing screen', () => {
    const wrapper = shallow(<DescriptionLink {...defaultProps} />);

    it('renders every component', () => {
        expect(wrapper.find(NotificationInfo)).toHaveLength(1);
        expect(wrapper.find(Headline)).toHaveLength(1);
        expect(wrapper.find(Feedback)).toHaveLength(1);
        expect(wrapper.find(OneButton)).toHaveLength(1);
    });

    it('renders every component with custom content', () => {
        expect(wrapper.find(Headline).prop('text')).toEqual(defaultProps.title);
        expect(wrapper.find(Feedback).prop('text')).toEqual(defaultProps.description);
        expect(wrapper.find(OneButton).prop('text')).toEqual(defaultProps.buttonLabel);
    });

    it('functional button', () => {
        expect(defaultProps.onClick.mock.calls.length).toEqual(0);
        wrapper.find(OneButton).simulate('click');
        expect(defaultProps.onClick.mock.calls.length).toEqual(1);
        wrapper.find(OneButton).simulate('click');
        wrapper.find(OneButton).simulate('click');
        expect(defaultProps.onClick.mock.calls.length).toEqual(3);
    });

    it('functional link for feedback', () => {
        expect(defaultProps.descriptionOnClick.mock.calls.length).toEqual(0);
        wrapper.find(Feedback).simulate('click');
        expect(defaultProps.descriptionOnClick.mock.calls.length).toEqual(1);
        wrapper.find(Feedback).simulate('click');
        wrapper.find(Feedback).simulate('click');
        expect(defaultProps.descriptionOnClick.mock.calls.length).toEqual(3);
    })

})