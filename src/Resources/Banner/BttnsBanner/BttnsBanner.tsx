import React from 'react';
import Link from '../../../Buttons/Link/';
import {linkProps} from '../../../Buttons/Link/Link';
import styles from './BttnsBanner.styles';

const BttnsBanner = (props: {primaryAction: linkProps; secondaryAction: linkProps}) => {
    return (
        <div className={styles.container}>
            <Link {...props.secondaryAction} />
            <Link {...props.primaryAction} />
        </div>
    );
};

export default BttnsBanner;
