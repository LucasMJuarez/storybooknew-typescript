import * as React from 'react';
import styles from './ButtonLink.styles';
import NotificationInfo from '../../../Assets/64/NotificationInfo';
import Headline from '../../../TextCatalog/HEADLINE';
import Title from '../../../TextCatalog/TITLE';
import OneButton from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';
import eBody from '../../../TextCatalog/BODY';
import ThreeLink from '../../../Buttons/Link/Feedback';
import Sub from '../../../TextCatalog/SUB';
import stylesBody from '../../../TextCatalog/BODY/Body.styles';

export type SingleButtonProps = {
    title: string;
    description: string;
    buttonLabel: string;
    onClick: Function;
    ariaHiddenSvg?: boolean;
    children?: any;
    terminosText: string;
    markedText: string;
    inverse?: boolean;
    onClickLink: Function;
};

function SingleButton(props: SingleButtonProps) {
    let button_text_type = 'text_primary_special_0';

    if (props.inverse) {
        button_text_type = 'text_primary_special_0_disabled';
    }

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
            {props.children}
            <div className={styles.buttonContainer}>
                <OneButton text={props.buttonLabel} onClick={props.onClick} />
            </div>
            <span className={styles.terminosText}>
                {props.terminosText}
                <span onClick={() => props.onClickLink()} className={styles.marked}>
                    {props.markedText}
                </span>
            </span>
        </div>
    );
}

export default SingleButton;
