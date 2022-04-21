import * as React from 'react';
import styles from './Massa.styles';

export type MassaProps = {
    children: React.ReactNode
    alignLeft?: boolean
}

function Massa(props: MassaProps) {
    return (
        <div className={props.alignLeft ? styles.containerLeft : styles.container}>
            {props.children}
        </div>
    );
}

export default Massa;
