import * as React from 'react';
import Body from '../../../../../TextCatalog/BODY';
import styles from './Title16_Dashboard.styles';

function Title16Dashboard(props: {text: string}) {
    return (
        <div className={styles.container}>
            <Body level={2} align='Center' type='text_primary_special_0' text={props.text} />
        </div>
    );
}

export default Title16Dashboard;
