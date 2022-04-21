import * as React from 'react';
import styles from './LabelStatus.styles';
import SectionTitle from '../../Texts/Basics/Left/SectionTitle';
import Label from '../../Labels/Background/Label';
import FatGrey from '../../Dividers/FatGrey';
import {labelCategoryEnum} from '../../Labels/Background/Label/Label';

export type Props = {
    title: string;
    category: labelCategoryEnum;
    labelText: string;
    tabIndex?: number;
    ariaLabel?: string;
};
function LabelStatus(props: Props) {
    return (
        <div className={styles.container}  tabIndex={props.tabIndex} aria-label={props.ariaLabel}>
            <div className={styles.subContainer}>
                <SectionTitle text={props.title} />
                <div className={styles.label}>
                    <Label category={props.category} text={props.labelText} />
                </div>
            </div>
            <FatGrey />
        </div>
    );
}

export default LabelStatus;
