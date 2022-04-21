import React from 'react';
import Body from '../../../TextCatalog/BODY';
import Sub from '../../../TextCatalog/SUB';
import styles from './Action.styles';

export type Props = {
    text: string;
    buttonText: string;
    onClick: () => Function;
};

export default function Action({text, buttonText, onClick}: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textContainer}>
                <Sub text={text} align='Left' level={1} type={'text_primary_inverse_2'} />
            </div>
            <div className={styles.button} onClick={onClick}>
                <Body level={2} align='Right' type='text_primary_inverse_2' text={buttonText} />
            </div>
        </div>
    );
}
