import * as React from 'react';
import styles from './DescriptionLink.styles';
import NotificationInfo from '../../../Assets/64/NotificationInfo';
import Headline from '../../../TextCatalog/HEADLINE';
import Feedback from '../../../Buttons/Link/Feedback';
import OneButton from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';

export type DescriptionLinkProps = {
    title: string,
    description: string,
    descriptionOnClick: Function,
    descriptionTabIndex?: number,
    buttonLabel: string,
    buttonTabIndex?: number,
    onClick: Function,
}

const DescriptionLink = (props: DescriptionLinkProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <NotificationInfo />
                <h1 className={styles.title}>
                    <Headline text={props.title} level={3} align='Left' type='text_primary' />
                </h1>
                <Feedback text={props.description} onClick={props.descriptionOnClick} tabIndex={props.descriptionTabIndex} />
            </div>
            <div className={styles.buttonContainer}>
                <OneButton text={props.buttonLabel} onClick={props.onClick} tabIndex={props.buttonTabIndex} />
            </div>
        </div>
    );
}

export default DescriptionLink;
