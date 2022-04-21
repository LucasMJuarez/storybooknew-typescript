import * as React from 'react';
import SlimLineCentered from '../../../../../Dividers/SlimLineCentered';
import Primary16R from '../../../../../Resources/ListsAmount/Left/Primary16R';
import Caption from '../../../../../TextCatalog/CAPTION/Caption';
import styles from './OneL.styles';

function OneL(props: {title: string; secondary?: string; showLine?: boolean; children?: React.ReactNode}) {
    const {title, secondary, showLine, children} = props;

    return (
        <div className={styles.container}>
            <Primary16R text={title} />
            <div className={styles.amount_container}>
                {secondary ? <Caption text={secondary} level={2} align='Right' type='text_primary' /> : children}
            </div>
            {showLine ? <SlimLineCentered /> : null}
        </div>
    );
}

export default OneL;
