import React from 'react';
import Primary16R from '../../../../Resources/ListsAmount/Left/Primary16R';
import Secondary14R from '../../../../Resources/ListsAmount/Left/Secondary14R';
import Amount, {AmountProps} from '../../../../Resources/ListsAmount/Right/Amount';
import SlimLineCentered from '../../../../Dividers/SlimLineCentered';
import styles from './TwoL.styles';

export type Props = {
    title: string;
    amount: AmountProps;
    secondary: string;
    hideLine?: boolean;
};

const TwoL = (props: Props) => {
    const {title, amount, secondary, hideLine} = props;

    return (
        <div className={styles.wrapper}>
            <span className={styles.titleAmount}>
                <Primary16R text={title} />
                <Amount amount={amount} />
            </span>
            <span className={styles.subtitle}>
                <Secondary14R text={secondary} />
            </span>
            {hideLine ? null : <SlimLineCentered />}
        </div>
    );
};

export default TwoL;
