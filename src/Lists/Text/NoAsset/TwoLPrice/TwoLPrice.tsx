import React from 'react';
import SlimLineCentered from '../../../../Dividers/SlimLineCentered';
import styles from './TwoLPrice.styles';
import Body from '../../../../TextCatalog/BODY';
import Sub from '../../../../TextCatalog/SUB';
import Amount, {AmountProps} from '../../../../Resources/ListsAmount/Right/Amount';

interface TwoLPriceProps {
    title: string;
    secondary: string;
    information: AmountProps;
    hideLine?: boolean;
    tabIndex?: number;
}

const TwoLPrice = (props: TwoLPriceProps) => {
    const {title, secondary, hideLine, tabIndex, information} = props;

    return (
        <div className={styles.mainContainer} tabIndex={tabIndex}>
            <div className={styles.container}>
                <Body text={title} level={1} align='Left' type='text_primary_2' />
                <Amount amount={information} />
            </div>
            <div className={styles.container}>
                <Sub text={secondary} level={2} align='Left' type='text_secondary_2' />
            </div>
            <div className={styles.lineContainer}>{hideLine ? null : <SlimLineCentered />}</div>
        </div>
    );
};

export default TwoLPrice;
