import React from 'react';
import {shallow, render} from 'enzyme';
import WithLinks from '.';
import Link from '../../../Buttons/Link';
import Title from '../../../TextCatalog/HEADLINE';
import Description from '../../../TextCatalog/TITLE';

let mockFn = jest.fn();
const defaultProps = {
    title: 'Este navegador ya no está soportado',
    description: 'Por favor, usa uno de los navegadores soportados:',
    linksLabel: ['Link1', 'Link2', 'Link3'],
    href: ['Link1', 'Link2', 'Link3'],
    onClick: [mockFn, mockFn, mockFn],
};

describe('Test WithLinks', () => {
    test('renders every component', () => {
        const wrapper = shallow(<WithLinks {...defaultProps} />);
        expect(wrapper.find(Description)).toHaveLength(1);
        expect(wrapper.find(Title)).toHaveLength(1);
        expect(wrapper.find(Link)).toHaveLength(3);
    });

    test('renders default props', () => {
        const wrapper = shallow(<WithLinks {...defaultProps} onClick={defaultProps.onClick} />);
        expect(wrapper.find(Title).prop('text')).toEqual(defaultProps.title);
        expect(wrapper.find(Description).prop('text')).toEqual(defaultProps.description);
        expect(wrapper.find(Link).at(0).prop('text')).toEqual(defaultProps.linksLabel[0]);
        expect(wrapper.find(Link).at(1).prop('text')).toEqual(defaultProps.linksLabel[1]);
        expect(wrapper.find(Link).at(2).prop('text')).toEqual(defaultProps.linksLabel[2]);
        expect(wrapper.find(Link).at(0).prop('href')).toEqual(defaultProps.href[0]);
        expect(wrapper.find(Link).at(1).prop('href')).toEqual(defaultProps.href[1]);
        expect(wrapper.find(Link).at(2).prop('href')).toEqual(defaultProps.href[2]);
    });
});
