import React from 'react';
import styles from './OneL.styles';
import Primary16R from '../../../../../Resources/ListsAmount/Left/Primary16R';
import SlimLineCentered from '../../../../../Dividers/SlimLineCentered';
import RadioOff from '../../../../../Controls/RadioOff';
import RadioOn from '../../../../../Controls/RadioOn';

function OneL(props: {
    text: string;
    onClick: Function;
    active: boolean;
    showLine: boolean;
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
                tabIndex={props.tabIndex}
                aria-label={props.ariaLabel}
                role={props.role}
            >
                <div className={styles.content}>
                    <div className={styles.subContent}>
                        <div className={styles.textContainer}>
                            <Primary16R text={props.text} />
                        </div>
                    </div>
                    {props.active ? <RadioOn /> : <RadioOff />}
                </div>
            </div>
            {props.showLine && <SlimLineCentered />}
        </>
    );
}

export default OneL;
