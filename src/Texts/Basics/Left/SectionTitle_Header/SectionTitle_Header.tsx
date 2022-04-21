import * as React from 'react';
import Title from '../../../../TextCatalog/TITLE';
import styles from './SectionTitle_Header.styles';

function SectionTitle_Header(props: {text: string}) {
    return (
        <div className={styles.container}>
            <Title level={1} align='Left' type='text_primary_special_1' text={props.text} />
        </div>
    );
}

export default SectionTitle_Header;
