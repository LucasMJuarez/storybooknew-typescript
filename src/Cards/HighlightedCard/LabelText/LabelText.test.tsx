import React from 'react';
import { shallow } from 'enzyme';
import LabelText from './LabelText';
import TITLE from '../../../TextCatalog/TITLE';
import SUB from '../../../TextCatalog/SUB';
import Button from '../../../Buttons/Primary/Small';
import Label from '../../../Labels/Background/Label';

let mockBtn = jest.fn();

const descriptionItems = [
    'Fibra 300Mb, 100Mb y 50Mb.',
    'Instalación sin cargo.',
    'Llamadas ilimitadas a fijos del país.'
]

const defaultProps = {
    titleLabel: '¡Te regalamos $600 por 12 meses!',
    simpleLabel: 'Contratá Internet',
    description: descriptionItems,
    btnText: 'Ver los planes',
    onClick: () => {
        alert('My Button');
    },
}

const defaultPropsWithoutTitle = {
    simpleLabel: 'Contratá Internet',
    description: descriptionItems,
    btnText: 'Ver los planes',
    onClick: () => {
        alert('My Button');
    },
}

const wrappeWithTitle = shallow(<LabelText {...defaultProps} />);
const wrappeWithoutTitle = shallow(<LabelText {...defaultPropsWithoutTitle} />);

it('is truthy', () => {
    expect(LabelText).toBeTruthy();
});
it('renders every with all components', () => {
    expect(wrappeWithTitle.find(Label)).toHaveLength(1);
    expect(wrappeWithTitle.find(TITLE)).toHaveLength(1);
    expect(wrappeWithTitle.find(SUB)).toHaveLength(3);
    expect(wrappeWithTitle.find(Button)).toHaveLength(1);
});
it('renders without Title', () => {
    expect(wrappeWithoutTitle.find(Label)).toHaveLength(0);
    expect(wrappeWithoutTitle.find(TITLE)).toHaveLength(1);
    expect(wrappeWithoutTitle.find(SUB)).toHaveLength(3);
    expect(wrappeWithoutTitle.find(Button)).toHaveLength(1);
});
