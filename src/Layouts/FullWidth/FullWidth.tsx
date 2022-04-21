import * as React from 'react';
import styles from './FullWidth.styles';

function FullWidth(props: {children: React.ReactNode; role?: string}) {
    return <div role={props.role} className={styles.container}>{props.children}</div>;
}

export default FullWidth;
