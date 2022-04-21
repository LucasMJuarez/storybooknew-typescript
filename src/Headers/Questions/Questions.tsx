import React, { KeyboardEventHandler, useState } from 'react';
import Body from '../../TextCatalog/BODY/Body';
import styles from './Questions.styles';
import Massa from '../../Resources/Massa';
import QuestionHeader from '../../Texts/Basics/Left/QuestionHeader';
import OneButton from '../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button/OneButton';

const Questions = (props: {
    handleClick: Function;
    handleKeyPress?: React.KeyboardEventHandler;
    handleClickNext: Function;
    title: string;
    textHeader: string;
    questionIndex: number;
    questionNumber: number;
    children?: React.ReactNode
}) => {
    return (
        <div className={styles.container}>
            <Massa alignLeft={true}>
                <div className={styles.massa}>
                    <div className={styles.body}>
                        <div className={styles.mobileMode}>
                            <Body level={1} align='Left' type='text_primary_inverse' text={props.title + (props.questionIndex + 1) + '/' + props.questionNumber} />
                        </div>
                        <div className={styles.desktopMode}>
                            <Body level={1} align='Left' type='text_primary' text={props.title + (props.questionIndex + 1) + '/' + props.questionNumber} />
                        </div>
                    </div>
                    <div className={styles.questionHeader}>
                        <div className={styles.mobileMode}>
                            <QuestionHeader text={props.textHeader} />
                        </div>
                        <div className={styles.desktopMode}>
                            <QuestionHeader text={props.textHeader} type={'text_primary'} />
                        </div>
                    </div>
                </div>
            </Massa>
            {props.children}
            <div className={styles.button}>
                <OneButton
                    text={'Siguiente'}
                    ariaLabel={'Siguiente'}
                    onClick={props.handleClickNext}
                />
            </div>
        </div>
    );
}

export default Questions;