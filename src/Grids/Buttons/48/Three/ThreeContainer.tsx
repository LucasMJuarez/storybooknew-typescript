import React from 'react';
import styles from './ThreeContainer.styles';

function ThreeContainer(props : { children : React.ReactNode }) {

    const { children } = props;

    return (
        <div className={styles.container}>{ children }</div>
    )
}

export default ThreeContainer;
