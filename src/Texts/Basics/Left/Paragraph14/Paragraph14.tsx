import * as React from 'react';
import Sub from '../../../../TextCatalog/SUB';
import styles from './Paragraph14.styles';

type Props = {
    text: string;
    type?: string;
};

function Paragraph14({text, type = 'text_secondary'}: Props) {
    return (
        <div className={styles.container}>
            <Sub level={1} align='Left' type={type} text={text} />
        </div>
    );
}

export default Paragraph14;
