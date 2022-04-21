import React from 'react';
import Questions from '.';
import OneL from '../../Lists/RadioButton/FullWidth/NoAsset/1L/OneL';

export default {
    title: 'Headers/Questions',
    component: Questions,
};

export const QuestionsStorie = (args: {
    handleClick: Function;
    handleClickNext: Function;
    title: string;
    textHeader: string;
    questionNumber: number;
    questionIndex: number;
    children: React.ReactNode
}) => (
    <Questions
        textHeader={args.textHeader}
        handleClick={args.handleClick}
        handleClickNext={args.handleClickNext}
        title={args.title}
        questionIndex={args.questionIndex}
        questionNumber={args.questionNumber}
    >
        {args.children}
    </Questions>
);

QuestionsStorie.args = {
    textHeader: '¿En que provincia viviste?',
    handleClick: () => alert('Hello There'),
    handleClickNext: () => alert('Hello There'),
    title: 'Pregunta: ',
    questionIndex: 0,
    questionNumber: 1,
    children: (
        <>
            <OneL
                key={0}
                text={'Tucumán'}
                onClick={() => { }}
                active={false}
                showLine={true}
                tabIndex={1}
                ariaLabel={'Seleccionar item'}
                role={'button'}
                onkeyPress={() => { }}
            />
            <OneL
                key={0}
                text={'Salta'}
                onClick={() => { }}
                active={true}
                showLine={true}
                tabIndex={1}
                ariaLabel={'Seleccionar item'}
                role={'button'}
                onkeyPress={() => { }}
            />
        </>
    )
};
