import * as React from 'react';
import WomanDesk from '../../../Illustrations/WomanDesk';
import Sub from '../../../TextCatalog/SUB';
import Title from '../../../TextCatalog/TITLE';
import styles from './ButtonDesk.styles';

export type EmptyStateIllustrationButtonIllustrationEnum = 'WomanDesk';

const imageOrchester = (imageName: EmptyStateIllustrationButtonIllustrationEnum) => {
    const image = {WomanDesk: <WomanDesk />};
    return image[imageName];
};

function ButtonDesk(props: {title: string; description: string; image: EmptyStateIllustrationButtonIllustrationEnum}) {
    return (
        <div className={styles.container} role='alert'>
            {imageOrchester(props.image)}
            <h1 className={styles.titleContainer}>
                <Title level={1} align='Center' type='text_primary' text={props.title} />
            </h1>
            <div className={styles.descriptionContainer}>
                <Sub level={1} align='Center' type='text_secondary' text={props.description} />
            </div>
        </div>
    );
}

export default ButtonDesk;
