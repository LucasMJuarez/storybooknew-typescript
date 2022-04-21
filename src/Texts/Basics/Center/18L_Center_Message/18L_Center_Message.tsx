import * as React from 'react';
import Title from '../../../../TextCatalog/TITLE';
import styles from './18L_Center_Message.styles';

function CenterMessage18L(props: {text: string}) {
    return (
        <div className={styles.container}>
            <Title level={1} align='Center' type='text_primary_special_0' text={props.text} />
        </div>
    );
}

export default CenterMessage18L;
