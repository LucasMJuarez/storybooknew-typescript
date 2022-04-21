import * as React from 'react';
import Sub from '../../../../TextCatalog/SUB';
import styles from './Link.styles';

type Props = {
    text: string;
    type?: string;
    onClick: Function;
};

function Link({text, type = 'text_link' || 'text_link_2', onClick}: Props) {
    return (
        <div className={styles.container} onClick={() => onClick()}>
            <Sub level={2} align='Left' type={type} text={text} />
        </div>
    );
}

export default Link;
