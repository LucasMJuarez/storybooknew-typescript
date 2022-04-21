import * as React from 'react';
import styles from './AmountContainer.styles';

function AmountContainer(props: {children: React.ReactNode}) {
    return <div className={styles.container}>{props.children}</div>;
}

export default AmountContainer;
