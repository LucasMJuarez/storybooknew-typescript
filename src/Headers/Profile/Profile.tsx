import React from 'react';
import LightDown from '../../Assets/24/Dropdown/LightDown';
import Title from '../../TextCatalog/TITLE/Title';
import Body from '../../TextCatalog/BODY/Body';
import styles from './Profile.styles';
import MovistarBackgroundBig from '../../Resources/MovistarBackgroundBig';

export default function Profile(props: {
    children?: any;
    primaryText: string;
    secondaryText: string;
    onClick: Function;
    tabIndex?: number;
    onkeyPress?: React.KeyboardEventHandler;
    ariaLabel?: string;
    role?: string;
}) {
    return (
        <div className={styles.card}>
            <div className={styles.mainContainer}>
                <div className={styles.backgroundImg}>
                    <MovistarBackgroundBig />
                </div>
                {props.children}
                <div
                    className={styles.subContainer}
                    onClick={() => props.onClick()}
                    tabIndex={props.tabIndex}
                    onKeyPress={props.onkeyPress || function () {}}
                    aria-label={props.ariaLabel}
                    role={props.role}
                >
                    <div className={styles.textBox}>
                        <Title level={2} align='Left' type='text_primary_inverse_2' text={props.primaryText} />
                        <Body level={1} align='Left' type='text_primary_inverse_2' text={props.secondaryText} />
                    </div>
                    <LightDown />
                </div>
            </div>
        </div>
    );
}
