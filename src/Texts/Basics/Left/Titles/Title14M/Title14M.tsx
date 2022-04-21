import * as React from 'react';
import Sub from '../../../../../TextCatalog/SUB';
import styles from './Title14M.styles';

function Title14M(props: {text: string; tabIndex?: number}) {
    return (
        <div className={styles.container} tabIndex={props.tabIndex}>
            <Sub level={2} align='Left' type='text_secondary' text={props.text} />
        </div>
    );
}

export default Title14M;
