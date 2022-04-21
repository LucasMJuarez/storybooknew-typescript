import React from 'react';
import BulletList from '../../../Assets/12/BulletList';
import styles from './List.styles';
import Body from '../../../TextCatalog/BODY/Body';

export default function SubList(props: {text: string}) {
    return (
        <li className={styles.container}>
            <div className={styles.bullet}>
                <BulletList />
            </div>
            <Body level={1} align='Left' type='text_secondary' text={props.text} />
        </li>
    );
}
