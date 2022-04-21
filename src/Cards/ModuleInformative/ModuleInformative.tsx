import React from 'react';
import Gift from '../../Assets/40/Gift';
import Cant_Talk from '../../Assets/64/Cant_Talk';
import styles from './ModuleInformative.styles';
import Title from '../../TextCatalog/TITLE';
import Sub from '../../TextCatalog/SUB';
import Button from '../../Buttons/Primary';

export type ModuleInformativeIconEnum = 'Gift' | 'Cant_Talk';

const ModuleInformative = (props: {
    title: string;
    description: string;
    icon: ModuleInformativeIconEnum;
    labelButton: string;
    onClick: Function;
}) => {
    const { title, description } = props;

    const iconOrchester = (iconName: ModuleInformativeIconEnum) => {
        const icons = {
            Gift: <Gift />,
            Cant_Talk: <Cant_Talk />
        };
        return icons[iconName];
    };

    return (
        <section className={styles.container}>
            {iconOrchester(props.icon)}
            <div className={styles.contentContainer}>
                <Title level={1} align='Center' type='text_primary_2' text={props.title} />
                <Sub level={1} align='Center' type='text_secondary' text={props.description} />
            </div>
            <Button onClick={props.onClick} text={props.labelButton} tabIndex={0} />
        </section>
    );
};

export default ModuleInformative;
