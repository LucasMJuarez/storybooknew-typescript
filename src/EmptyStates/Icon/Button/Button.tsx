import * as React from 'react';
import Primary from '../../../Buttons/Primary';
import EmptyData from '../../../Illustrations/104/EmptyData';
import NotificationInfo from '../../../Illustrations/104/NotificationInfo';
import EmptyError from '../../../Illustrations/EmptyError';
import BulletList from '../../../Resources/EmptyStates/BulletList';
import Sub from '../../../TextCatalog/SUB';
import Title from '../../../TextCatalog/TITLE';
import styles from './Button.styles';
import SupportAgent_Circle from '../../../Assets/40/SupportAgent_Circle';

export type EmptyStateIconStateIconEnum = 'NotificationInfo' | 'EmptyError' | 'EmptyData' | 'SupportAgent';
export type TypeDescriptionEnum = 'text_secondary' | 'text_primary';

const iconOrchester = (iconName: EmptyStateIconStateIconEnum) => {
    const icons = {
        NotificationInfo: <NotificationInfo />,
        EmptyError: <EmptyError />,
        EmptyData: <EmptyData />,
        SupportAgent: <SupportAgent_Circle />,
    };
    return icons[iconName];
};

function Button(props: {
    description: string;
    icon: EmptyStateIconStateIconEnum;
    title?: string;
    bulletList?: string[];
    typeDescription?: TypeDescriptionEnum;
    labelButton: string;
    onClick: Function;
}) {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>{iconOrchester(props.icon)}</div>
            {props.title && (
                <div className={styles.titleContainer}>
                    <Title level={0} align='Center' type='text_primary' text={props.title} />
                </div>
            )}
            <div className={styles.descriptionContainer}>
                <Sub
                    level={1}
                    align='Center'
                    type={props.typeDescription || 'text_secondary'}
                    text={props.description}
                />
            </div>
            <BulletList items={props.bulletList || []} />
            <div className={styles.buttonContainer}>
                <Primary text={props.labelButton} onClick={props.onClick} />
            </div>
        </div>
    );
}

export default Button;
