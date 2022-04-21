import * as React from 'react';
import styles from './NormalPrice.styles';

export default function NormalPrice(props: { precio: string }): JSX.Element {
    return (
        <div className={styles.container}>
            {props.precio} 
        </div>
    );
}