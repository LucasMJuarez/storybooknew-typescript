import * as React from 'react';
import styles from './Header.styles';

function Header(props: {children: React.ReactNode}) {
    return <div className={styles.container}>{props.children}</div>;
}

export default Header;
