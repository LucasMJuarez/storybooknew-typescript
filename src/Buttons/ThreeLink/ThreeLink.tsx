import React from 'react';
import SlimLineCentered from '../../Dividers/SlimLineCentered';
import Link from '../../Assets/24/Chevron/Link';
import styles from './ThreeLink.styles';

const ThreeLink = (props: {
    title: string;
    onClick: () => void;
    onKeyPress?: React.KeyboardEventHandler;
    hideLine?: boolean;
    hideLink?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    role?: string;
}) => {
    return (
        <div
            className={styles.container}
            role={props.role}
            onClick={props.onClick}
            tabIndex={props.tabIndex}
            aria-label={props.ariaLabel}
            onKeyPress={props.onKeyPress || function () {}}
        >
            <div className={styles.sub_text}>{props.title}</div> {props.hideLink ? null : <Link />}
            {props.hideLine ? null : <SlimLineCentered />}
        </div>
    );
};

export default ThreeLink;
