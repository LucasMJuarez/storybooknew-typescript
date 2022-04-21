import React from 'react';
import Body from '../../../TextCatalog/BODY';
import Sub from '../../../TextCatalog/SUB';
import styles from './Normal.styles';

export type Props = {
    text: string;
    buttonText: string;
    onClick: () => Function;
};

export default function Normal({text, buttonText, onClick}: Props) {
    return (
        <div className={styles.wrapper}>
            <Sub text={text} align='Left' level={1} type={'text_primary_inverse_2'} />
            <div className={styles.button} onClick={onClick}>
                <Body level={2} align='Right' type='text_link_snackbar_2' text={buttonText} />
            </div>
        </div>
    );
}
