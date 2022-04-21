import * as React from 'react';
import Sub from '../../../../TextCatalog/SUB';
import styles from './14R_Dashboard.styles';

function Dashboard14R(props: {text: string}) {
    return (
        <div className={styles.container}>
            <Sub level={1} align='Center' type='text_primary' text={props.text} />
        </div>
    );
}

export default Dashboard14R;
