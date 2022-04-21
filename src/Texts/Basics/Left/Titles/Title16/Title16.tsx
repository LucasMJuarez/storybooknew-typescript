import * as React from 'react';
import Body from '../../../../../TextCatalog/BODY';
import styles from './Title16.styles';

function Title16(props: {text: string}) {
    return (
        <div className={styles.container}>
            <Body level={2} align='Left' type='text_primary' text={props.text} />
        </div>
    );
}

export default Title16;
