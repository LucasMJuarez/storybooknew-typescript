import * as React from 'react';
import Display from '../../../../TextCatalog/DISPLAY';
import styles from './40R_Amount_Header.styles';

function AmountHeader40R(props: {text: string}) {
    return (
        <div className={styles.container}>
            <Display level={4} align='Center' type='text_primary_inverse' text={props.text} />
        </div>
    );
}

export default AmountHeader40R;
