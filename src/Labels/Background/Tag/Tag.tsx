import React from 'react';
import styles from './Tag.styles';
import Caption from '../../../TextCatalog/CAPTION';

const Tag = (props: {text: string}) => {
    return (
        <div className={styles.container}>
            <Caption level={2} align='Center' type='text_primary_inverse_2' text={props.text} />
        </div>
    );
};

export default Tag;
