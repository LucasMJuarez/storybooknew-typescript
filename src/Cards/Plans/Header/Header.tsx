import * as React from 'react';
import Label from '../../../Labels/Background/Label';
import styles from './Header.styles';
import { labelCategoryEnum } from '../../../Labels/Background/Label/Label'
import Title from '../../../TextCatalog/TITLE';
import Display from '../../../TextCatalog/DISPLAY';

export type HeaderProps = {
    showLabel: boolean,
    textLabel: string,
    categoryLabel: labelCategoryEnum,
    textTitle: string,
    textDisplay: string,
}

const Header = (props: HeaderProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.columnLeft}>
                {props.showLabel &&
                    <Label text={props.textLabel} category={props.categoryLabel} />}
                <div data-testid="wrapper-title" className={props.showLabel ? styles.title : styles.titleHideLabel}>
                    <Title level={5} align='Left' type='text_primary_inverse' text={props.textTitle} />
                </div>
            </div>
            <div className={styles.columnRight}>
                <Display level={4} align='Left' type='text_primary_inverse' text={props.textDisplay} />
            </div>
        </div>
    );
}

export default Header;