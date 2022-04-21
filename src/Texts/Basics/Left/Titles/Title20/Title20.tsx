import * as React from 'react';
import Title from '../../../../../TextCatalog/TITLE';
import styles from './Title20.styles';

function Title20(props: { text: string }) {
    return (
        <div className={styles.container}>
            <Title level={2} align='Left' type='text_primary' text={props.text} />
        </div>
    );
}

export default Title20;
