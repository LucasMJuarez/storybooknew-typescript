import React from 'react';
import Primary from '../../../Primary';
import {primaryButtonPropsType} from '../../../Primary/Primary';
import Secondary from '../../../Secondary';
import {secondaryButtonPropsType} from '../../../Secondary/Secondary';
import styles from './TwoButtons.styles';

const OneButtonCenter = (props: {primaryButton: primaryButtonPropsType; secondaryButton: secondaryButtonPropsType}) => {
    return (
        <div className={styles.container}>
            <Secondary {...props.secondaryButton} />
            <Primary {...props.primaryButton} />
        </div>
    );
};

export default OneButtonCenter;
