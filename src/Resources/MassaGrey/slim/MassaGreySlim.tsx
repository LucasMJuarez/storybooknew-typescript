import * as React from 'react';
import styles from './MassaGreySlim.styles';

function MassaGreySlim(props: {children: React.ReactNode}) {
    return <div className={styles.container}>{props.children}</div>;
}

export default MassaGreySlim;
