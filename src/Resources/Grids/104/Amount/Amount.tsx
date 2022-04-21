import * as React from 'react';
import Sub from '../../../../TextCatalog/SUB';
import {transformNumberToStringWithThousands} from '../../../../utils/number';
import styles from './Amount.styles';

function Amount(props: {amount: number; onClick: Function}) {
    return (
        <div onClick={() => props.onClick()} className={styles.container}>
            <div className={styles.option}>
                <Sub level={1} align='Right' type='text_primary' text={Number(props.amount) < 0 ? '-$' : '$'} />
                <div className={styles.text}>
                    {transformNumberToStringWithThousands(Number(props.amount) || 0).replace('-', '')}
                </div>
            </div>
        </div>
    );
}

export default Amount;
