import * as React from 'react';
import Title from '../../../../../TextCatalog/TITLE';
import styles from './Title24.styles';

function Title24(props: { text: string }) {
    return (
        <div className={styles.container}>
            <Title level={4} align='Left' type='text_primary' text={props.text} />
        </div>
    );
}

export default Title24;
