import * as React from 'react';
import WithoutRecomendations from '../../../Illustrations/WithoutRecomendations';
import Options from '../../../Illustrations/Options';
import Sub from '../../../TextCatalog/SUB';
import Title from '../../../TextCatalog/TITLE';
import styles from './Button.styles';

export type EmptyStateIllustrationButtonIllustrationEnum = 'WithoutRecomendations' | 'Options';

const imageOrchester = (imageName: EmptyStateIllustrationButtonIllustrationEnum) => {
    const image = {WithoutRecomendations: <WithoutRecomendations />, Options: <Options />};
    return image[imageName];
};

function Button(props: {title: string; description: string; image: EmptyStateIllustrationButtonIllustrationEnum}) {
    return (
        <div className={styles.container}>
            {imageOrchester(props.image)}
            <div className={styles.titleContainer}>
                <Title level={1} align='Center' type='text_primary' text={props.title} />
            </div>
            <div className={styles.descriptionContainer}>
                <Sub level={1} align='Center' type='text_secondary' text={props.description} />
            </div>
        </div>
    );
}

export default Button;
