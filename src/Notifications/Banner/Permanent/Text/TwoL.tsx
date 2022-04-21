import * as React from 'react';
import Close from '../../../../Assets/24/Close';
import Primary16R from '../../../../Resources/ListsAmount/Left/Primary16R/Primary16R';
import Sub from '../../../../TextCatalog/SUB';
import styles from './TwoL.styles';
import SlimLineCentered from '../../../../Dividers/SlimLineCentered';

function TwoL(props: {
    title: string;
    onkeyPress?: React.KeyboardEventHandler;
    time: string;
    description: string;
    permanent?: boolean;
    ariaLabel?: string;
    read?: boolean;
    image?: string;
    onClick: Function;
    tabIndex?: number;
    alt?: string;
}) {
    const [isVisible, setIsVisible] = React.useState(true);

    return isVisible ? (
        <div>
            <div
                className={styles.container}
                tabIndex={props.tabIndex}
                onClick={() => props.onClick()}
                onKeyPress={props.onkeyPress || function () {}}
            >
                <div className={styles.contentContainer}>
                    <div className={props.read ? styles.displayNoti : styles.badge} />
                    <div className={styles.textContainer}>
                        <Sub level={1} align='Left' type='text_secondary' text={props.time} />
                        <Primary16R text={props.title} type={'text_primary_2'} />
                        <Sub level={1} align='Left' type='text_secondary' text={props.description} />
                    </div>
                    {!props.permanent ? null : (
                        <button
                            className={styles.closeButton}
                            aria-label={props.ariaLabel}
                            onClick={() => setIsVisible(false)}
                        >
                            <Close />
                        </button>
                    )}
                </div>
                <div className={styles.imgStyles}>
                    <img src={props.image} alt={props.alt} />
                </div>
            </div>
            <div className={styles.slimLineCentered} />
        </div>
    ) : null;
}

export default TwoL;
