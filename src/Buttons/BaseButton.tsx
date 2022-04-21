import React from 'react';
import styles from './BaseButton.styles';
interface BaseButtonProps {
    onClick: Function;
    children?: any;
    disabled?: boolean;
    loading?: boolean;
    disableOnLoading?: boolean;
    className?: string;
    style?: any;
    tabIndex?: number;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
}

function BaseButton(props: BaseButtonProps) {
    let className: string, style: object;

    if (props.className) {
        className = styles.button + ' ' + props.className;
    } else {
        className = styles.button;
    }

    if (props.style) {
        style = props.style;
    } else {
        style = {};
    }

    let disabled = props.disabled || (props.loading && props.disableOnLoading);
    return (
        <button
            style={style}
            aria-label={props.ariaLabel}
            className={className}
            tabIndex={props.tabIndex}
            onClick={() => props.onClick()}
            onKeyPress={props.onKeyPress || function () {}}
            disabled={disabled}
        >
            {props.children}
        </button>
    );
}

export default BaseButton;
