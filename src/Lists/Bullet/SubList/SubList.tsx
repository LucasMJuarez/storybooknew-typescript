import React from 'react';
import BulletSublist from '../../../Assets/12/BulletSublist';
import styles from './SubList.styles';
import Body from '../../../TextCatalog/BODY/Body';

export default function SubList(props: {text: string}) {
    return (
        <li className={styles.container}>
            <div className={styles.bullet}>
                <BulletSublist />
            </div>
            <Body level={1} align='Left' type='text_secondary' text={props.text} />
        </li>
    );
}
