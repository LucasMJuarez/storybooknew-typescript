import * as React from 'react';
import Sub from '../../../../TextCatalog/SUB';
import styles from './14R_Header.styles';

function Header14R(props: {text: string}) {
    return (
        <div className={styles.container}>
            <Sub level={1} align='Center' type='text_chip_filter' text={props.text} />
        </div>
    );
}

export default Header14R;
