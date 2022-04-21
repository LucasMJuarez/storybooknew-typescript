import * as React from 'react';
import styles from './OverImage.styles';

function OverImage(props: { text: string }) {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    );
}

export default OverImage;
