import * as React from 'react';
import styles from './SingleButton.styles';
import NotificationKo from '../../../Assets/64/NotificationKo';
import Headline from '../../../TextCatalog/HEADLINE';
import Title from '../../../TextCatalog/TITLE';
import OneButton from '../../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/1Button';

function SingleButton(props: {title?: string; description?: string; buttonLabel?: string; onClick: Function}) {
    const DEFAULT = {
        headline: 'Ha ocurrido un error',
        title: 'Te pedimos que vuelvas a intentar más tarde. <p>Disculpá las molestias.</p>',
        buttonLabel: 'Volver a mi línea',
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <NotificationKo />
                <h1 className={styles.title}>
                    <Headline text={props.title || DEFAULT.headline} level={3} align='Left' type='text_primary' />
                </h1>
                <Title text={props.description || DEFAULT.title} level={1} align='Left' type='text_secondary' />
            </div>
            <div className={styles.buttonContainer}>
                <OneButton text={props.buttonLabel || DEFAULT.buttonLabel} onClick={props.onClick} />
            </div>
        </div>
    );
}

export default SingleButton;
