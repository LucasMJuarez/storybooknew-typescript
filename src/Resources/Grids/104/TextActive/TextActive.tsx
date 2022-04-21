import * as React from 'react';
import Sub from '../../../../TextCatalog/SUB';
import {transformNumberToStringWithThousands} from '../../../../utils/number';
import styles from './TextActive.styles';

function TextActive(props: {
    id?: string;
    onClick: Function;
    amount: number;
    onkeyPress?: React.KeyboardEventHandler;
    tabIndex?: number;
    ariaLabel?: string;
    role?: string;
}) {
    return (
        <div
            id={props.id}
            onClick={() => props.onClick()}
            className={styles.container}
            onKeyPress={props.onkeyPress || function () {}}
            tabIndex={props.tabIndex}
            aria-label={props.ariaLabel}
            role={props.role}
        >
            <div className={styles.option}>
                <div className={styles.text}>
                    {transformNumberToStringWithThousands(Number(props.amount) || 0).replace('-', '')}
                </div>
                <Sub level={1} align='Right' type='text_primary_text' text={'GB'} />
            </div>
        </div>
    );
}

export default TextActive;
