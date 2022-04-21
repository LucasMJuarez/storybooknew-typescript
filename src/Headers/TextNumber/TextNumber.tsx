import React from 'react';
import Title from '../../TextCatalog/TITLE/Title';
import Caption from '../../TextCatalog/CAPTION/Caption';
import styles from './TextNumber.styles';

export default function TextNumber(props: {
    primaryText: string;
    title:string;
    secondaryText: string;
    onClick?: Function;

}) {
    return (
        <div className={styles.Background}>
            <div className={styles.TopText}>
                <Caption level={3} align='Center' type='text_primary_inverse_2' text={props.primaryText} />
            </div>
            <div className={styles.MidText}>
                <Title level={2} align='Center' type='text_primary_inverse_2' text={props.title} />
            </div>
            <div className={styles.BottomText}>
                <Caption level={3} align='Center' type='text_primary_inverse_2' text={props.secondaryText} />
            </div>
        </div>
    );
}


