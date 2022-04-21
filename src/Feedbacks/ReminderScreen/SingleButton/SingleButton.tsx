import * as React from 'react';
import styles from './SingleButton.styles';
import NotificationOkPositive from '../../../Assets/64/NotificationOkPositive';
import Headline from '../../../TextCatalog/HEADLINE';
import Title from '../../../TextCatalog/TITLE';
import OneButton from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';

function SingleButton(props: {title: string; description: string; buttonLabel: string; onClick: Function}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <NotificationOkPositive />
                <h1 className={styles.title}>
                    <Headline text={props.title} level={3} align='Left' type='text_primary' />
                </h1>
                <Title text={props.description} level={1} align='Left' type='text_secondary' />
            </div>
            <div className={styles.buttonContainer}>
                <OneButton text={props.buttonLabel} onClick={props.onClick} />
            </div>
        </div>
    );
}

export default SingleButton;
