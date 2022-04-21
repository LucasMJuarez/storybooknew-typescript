import React from 'react';
import SlimLineCentered from '../../../../Dividers/SlimLineCentered';
import styles from './TwoL.styles';
import Body from '../../../../TextCatalog/BODY';
import Sub from '../../../../TextCatalog/SUB';

const TwoL = (props: {title: string; secondary: string; hideLine?: boolean; tabIndex?: number}) => {
    const {title, secondary, hideLine, tabIndex} = props;

    return (
        <div tabIndex={tabIndex}>
            <div className={styles.container}>
                <Body text={title} level={1} align='Left' type='text_primary_2' />
            </div>
            <div className={styles.container}>
                <Sub text={secondary} level={2} align='Left' type='text_secondary_2' />
            </div>
            <div className={styles.container}>{hideLine ? null : <SlimLineCentered />}</div>
        </div>
    );
};

export default TwoL;
