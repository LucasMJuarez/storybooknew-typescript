import React from 'react';
import { shallow } from 'enzyme';
import Questions from './Questions';
import Massa from '../../Resources/Massa';
import OneL from '../../Lists/RadioButton/FullWidth/NoAsset/1L/OneL';
import OneButton from '../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button/OneButton';
import QuestionHeader from '../../Texts/Basics/Left/QuestionHeader';
import Body from '../../TextCatalog/BODY/Body';

describe('', () => {

    const wrapper = shallow(
        <Questions
            handleClick={() => { }}
            handleClickNext={() => { }}
            title='Preguntas: '
            textHeader='¿Dónde viviste?'
            questionIndex={0}
            questionNumber={1}
        >
            <OneL
                key={0}
                text={'Here'}
                onClick={() => { }}
                active={false}
                showLine={true}
                tabIndex={1}
                ariaLabel={'Seleccionar item'}
                role={'button'}
                onkeyPress={() => { }}
            />

        </Questions>
    );

    it('is truthy', () => {
        expect(Questions).toBeTruthy();
    });
    it('renders children components ok', () => {
        expect(wrapper.find(Massa).length).toBe(1);
        expect(wrapper.find(OneL).length).toBe(1);
        expect(wrapper.find(OneButton).length).toBe(1);
        expect(wrapper.find(QuestionHeader).length).toBe(2);
        expect(wrapper.find(Body).length).toBe(2);
    });

})