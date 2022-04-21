import * as React from 'react';
import styles from './NavBarTitle.styles';
import Title from '../../../../TextCatalog/TITLE';

function NavBarTitle(props: {text: string}) {
    return (
        <h1 className={styles.container}>
            <Title level={0} align='Left' type='text_navigation_bar_primary' text={props.text} />
        </h1>
    );
}

export default NavBarTitle;
