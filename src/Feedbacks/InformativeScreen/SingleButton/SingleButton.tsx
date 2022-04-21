import * as React from 'react';
import styles from './SingleButton.styles';
import NotificationInfo from '../../../Assets/64/NotificationInfo';
import Headline from '../../../TextCatalog/HEADLINE';
import Title from '../../../TextCatalog/TITLE';
import OneButton from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';

export type SingleButtonProps = {
    title: string;
    description: string;
    buttonLabel: string;
    onClick: Function;
    ariaHiddenSvg?: boolean;
};

function SingleButton(props: SingleButtonProps) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div aria-hidden={props.ariaHiddenSvg}>
                    <NotificationInfo />
                </div>
                <h1 className={styles.title}>
                    <Headline text={props.title} level={3} align='Left' type='text_primary' />
                </h1>
                <Title text={props.description} level={1} align='Left' type='text_secondary' />
            </div>
            <div className={styles.buttonContainer}>
                <OneButton text={props.buttonLabel} onClick={props.onClick} />
            </div>
        </div>
    );
}

export default SingleButton;
