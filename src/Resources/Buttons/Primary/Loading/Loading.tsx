import * as React from 'react';
import Spinner24 from '../../../Spinners/24';
import styles from './Loading.styles';

function Loading(props: {inverse: boolean; blue: boolean}) {
    return (
        <div className={styles.container}>
            <Spinner24 blue={props.blue} inverse={props.inverse} />
        </div>
    );
}

export default Loading;
