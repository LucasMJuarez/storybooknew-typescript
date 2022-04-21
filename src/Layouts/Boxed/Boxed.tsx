import * as React from 'react';
import styles from './Boxed.styles';

function Boxed(props: {children: React.ReactNode}) {
    return (
        <div className={styles.background}>
            <div className={styles.container}>{props.children}</div>
        </div>
    );
}

export default Boxed;
