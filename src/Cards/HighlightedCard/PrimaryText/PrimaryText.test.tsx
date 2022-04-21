import React from 'react';
import { shallow } from 'enzyme';
import PrimaryText from './PrimaryText';
import TITLE from '../../../TextCatalog/TITLE';
import SUB from '../../../TextCatalog/SUB';
import Button from '../../../Buttons/Primary/Small';

const descriptionItems = [
    'Unificá la titularidad y te regalamos $600 en tu plan móvil por 12 meses.'
]

const defaultProps = {
    simpleLabel: 'Tengo Internet Movistar en mi casa, pero no está a mi nombre',
    description: descriptionItems,
    btnText: 'Ver los planes',
    onClick: () => {
        alert('My Button');
    },
}

const wrappeWithTitle = shallow(<PrimaryText {...defaultProps} />);

it('is truthy', () => {
    expect(PrimaryText).toBeTruthy();
});
it('renders every with all components', () => {
    expect(wrappeWithTitle.find(TITLE)).toHaveLength(1);
    expect(wrappeWithTitle.find(SUB)).toHaveLength(1);
    expect(wrappeWithTitle.find(Button)).toHaveLength(1);
});
