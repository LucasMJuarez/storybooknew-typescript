import React from 'react';
import styles from './ChipMenu.style';

const ChipMenu = (props: { children: React.ReactNode }) => {

    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default ChipMenu;