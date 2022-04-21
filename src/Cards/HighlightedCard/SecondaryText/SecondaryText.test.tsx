import React from 'react';
import {shallow} from 'enzyme';
import SecondaryText from './SecondaryText';
import TITLE from '../../../TextCatalog/TITLE';
import SUB from '../../../TextCatalog/SUB';
import Button from '../../../Buttons/Secondary/Small';

const defaultProps = {
    simpleLabel: 'Tengo Internet Movistar en mi casa, pero no está a mi nombre',
    description: 'Unificá la titularidad y te regalamos $600 en tu plan móvil por 12 meses.',
    btnText: 'Ver los planes',
    onClick: () => {
        alert('My Button');
    },
};

const wrappeWithTitle = shallow(<SecondaryText {...defaultProps} />);

it('is truthy', () => {
    expect(SecondaryText).toBeTruthy();
});
it('renders every with all components', () => {
    expect(wrappeWithTitle.find(TITLE)).toHaveLength(1);
    expect(wrappeWithTitle.find(SUB)).toHaveLength(1);
    expect(wrappeWithTitle.find(Button)).toHaveLength(1);
});
