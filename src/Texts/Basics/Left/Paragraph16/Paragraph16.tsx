import * as React from 'react';
import Body from '../../../../TextCatalog/BODY';
import styles from './Paragraph16.styles';

type Props = {
    text: string;
    type?: string;
};

function Paragraph16({text, type = 'text_secondary'}: Props) {
    return (
        <div className={styles.container}>
            <Body level={1} align='Left' type={type} text={text} />
        </div>
    );
}

export default Paragraph16;
