import React from 'react';
import Message from '../../Assets/64/Message';
import OpenIssues from '../../Assets/64/OpenIssues'
import styles from './ModuleInformativeIconAndText.styles';
import Title from '../../TextCatalog/TITLE';
import Sub from '../../TextCatalog/SUB';

type imageIcon = 'Message' | 'OpenIssues';

const ModuleInformativeIconAndText = (props: {title?: string; description?: string; icon?: imageIcon}) => {
    const {title, description} = props;

    const DEFAULT: {icon: imageIcon; title: string; description: string} = {
        title: 'Aún no has consumidos datos',
        description: 'Aquí verás el detalle de consumo de datos durante el ciclo de facturación.',
        icon: 'Message',
    };

    const icons: {[icon in imageIcon]: any} = {
        Message,
        OpenIssues,
    };

    const Icon = icons[props.icon || DEFAULT.icon];
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}><Icon /></div>
            <div className={styles.titleContainer}>
                <Title level={1} align='Center' type='Title Android3TITLETitle-1-18LCentertext_primary_special_0' text={props.title || DEFAULT.title} />
            </div>
            <div className={styles.descriptionContainer}>
                <Sub level={1} align='Center' type='Permtenos-acceder-a Android5SUB-14Sub-1-14RCentertext_secondary_special_0-2' text={props.description || DEFAULT.description} />
            </div>
        </div>
    );
}

export default ModuleInformativeIconAndText;