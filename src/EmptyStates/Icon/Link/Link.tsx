import React from 'react';
import styles from './Link.styles';
import EmptyData from '../../../Illustrations/104/EmptyData';
import EmptyBills from '../../../Illustrations/104/EmptyBills';
import Title from '../../../TextCatalog/TITLE';
import Sub from '../../../TextCatalog/SUB';

type LinkIcons = 'EmptyData' | 'EmptyBills';

const Link = (props: {title?: string; description?: string; icon?: LinkIcons}) => {
    const {title, description} = props;

    const DEFAULT: {icon: LinkIcons; title: string; description: string} = {
        title: 'Aún no has consumidos datos',
        description: 'Aquí verás el detalle de consumo de datos durante el ciclo de facturación.',
        icon: 'EmptyData',
    };

    const icons: {[icon in LinkIcons]: any} = {
        EmptyData,
        EmptyBills,
    };

    const Icon = icons[props.icon || DEFAULT.icon];

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div style={{textAlign: 'center', height: '104px'}}>
                    <Icon />
                </div>
                <div className={styles.title_container}>
                    <Title text={title || DEFAULT.title} level={1} align='Center' type='text_primary' />
                </div>
                <Sub text={description || DEFAULT.description} level={1} align='Center' type='text_secondary' />
            </div>
        </div>
    );
};

export default Link;
