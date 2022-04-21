import React from 'react';
import styles from './OneLLeft.styles';
import Primary16R from '../../../../../Resources/ListsAmount/Left/Primary16R';
import RadioOff from '../../../../../Controls/RadioOff';
import RadioOn from '../../../../../Controls/RadioOn';

function OneLLeft(props: {
    id?: string;
    text: string;
    onClick: Function;
    active: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    role?: string;
    onkeyPress?: React.KeyboardEventHandler;
}) {
    return (
        <>
            <div
                onClick={() => props.onClick()}
                className={styles.container}
                onKeyPress={props.onkeyPress || function () {}}
                role={props.role}
            >
                <div className={styles.content}>
                    {props.active ? (
                        <RadioOn id={props.id} tabIndex={props.tabIndex} aria-label={props.ariaLabel} />
                    ) : (
                        <RadioOff class={props.id} tabIndex={props.tabIndex} aria-label={props.ariaLabel} />
                    )}
                    <div className={styles.subContent}>
                        <div className={styles.textContainer}>
                            <Primary16R text={props.text} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OneLLeft;
