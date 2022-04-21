import * as React from 'react';
import TwoButton from '../../../Buttons/ButtonLayouts/ButtonFullwidthLayout/2Buttons/TwoButton';
import styles from './Features.styles';
import Title from '../../../TextCatalog/TITLE/Title';
import PlanPospago from '../../../Illustrations/PlanPospago';

export type FeaturesProps = {
    title: string;
    children?: React.ReactNode;
    textPrimaryButton: string;
    textSecondaryButton: string;
    onClickPrimaryButton: Function;
    onClickSecondaryButton: Function
}

const Features = (props: FeaturesProps) => {
    return (
        <div className={styles.component}>
            <div className={styles.container}>
                <div className={styles.illustration}>
                    <PlanPospago />
                </div>
                <div className={styles.title}>
                    <Title text={props.title} level={0} align='Center' type='text_primary' />
                </div>
                <div className={styles.items}>
                    {props.children}
                </div>
                <TwoButton
                    textPrimary={props.textPrimaryButton}
                    textSecondary={props.textSecondaryButton}
                    onClickPrimary={props.onClickPrimaryButton}
                    onClickSecondary={props.onClickSecondaryButton}
                />
            </div>
        </div>
    );
}

export default Features;
