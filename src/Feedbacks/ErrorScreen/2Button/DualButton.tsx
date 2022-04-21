import * as React from 'react';
import styles from './DualButton.styles';
import Headline from '../../../TextCatalog/HEADLINE';
import Title from '../../../TextCatalog/TITLE';
import TwoButton from '../../../Buttons/ButtonLayouts/ButtonFullwidthLayout/2Buttons';
import NotificationKo from '../../../Assets/64/NotificationKo';

function DualButton(props: {
    title: string;
    description: string;
    labelPrimary: string;
    labelSecondary: string;
    onClickPrimary: Function;
    onClickSecondary: Function;
}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <NotificationKo />
                <h1 className={styles.title}>
                    <Headline text={props.title} level={3} align='Left' type='text_primary' />
                </h1>
                <Title text={props.description} level={1} align='Left' type='text_secondary' />
            </div>
            <div className={styles.buttonContainer}>
                <TwoButton
                    textPrimary={props.labelPrimary}
                    textSecondary={props.labelSecondary}
                    onClickPrimary={props.onClickPrimary}
                    onClickSecondary={props.onClickSecondary}
                />
            </div>
        </div>
    );
}

export default DualButton;
