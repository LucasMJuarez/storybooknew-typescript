import React from 'react';
import styles from './Spinner.styles';
function Spinner(props: {inverse?: boolean; size: number; blue?: boolean}) {
    return (
        <svg
            className={styles.container}
            height={props.size.toString()}
            role='img'
            viewBox='0 0 66 66'
            width={props.size.toString()}
        >
            <title>Cargando</title>
            <circle
                className={styles.spinner}
                cx='33'
                cy='33'
                fill='none'
                r='30'
                role='presentation'
                stroke={props.inverse ? styles.inverse : props.blue ? styles.colorBlue : styles.color}
                strokeLinecap='square'
                strokeWidth='6'
            />
        </svg>
    );
}

export default Spinner;
