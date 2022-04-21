import * as React from 'react';
import EmptyData from '../../../Illustrations/104/EmptyData';
import NotificationInfo from '../../../Illustrations/104/NotificationInfo';
import Label, {labelCategoryEnum} from '../../../Labels/Background/Label/Label';
import Sub from '../../../TextCatalog/SUB';
import Title from '../../../TextCatalog/TITLE';
import styles from './State.styles';

export type EmptyStateIconStateIconEnum = 'NotificationInfo';

const iconOrchester = (iconName: EmptyStateIconStateIconEnum) => {
    const icons = {NotificationInfo: <NotificationInfo />};
    return icons[iconName];
};

function State(props: {
    title: string;
    description: string;
    labelText: string;
    labelCategory: labelCategoryEnum;
    icon: EmptyStateIconStateIconEnum;
}) {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>{iconOrchester(props.icon)}</div>
            <div className={styles.labelContainer}>
                <Label text={props.labelText} category={props.labelCategory} />
            </div>
            <div className={styles.titleContainer}>
                <Title level={0} align='Center' type='text_primary' text={props.title} />
            </div>
            <div className={styles.descriptionContainer}>
                <Sub level={1} align='Center' type='text_secondary' text={props.description} />
            </div>
        </div>
    );
}

export default State;
