import React from 'react';
import styles from './Menu.styles';
import Body from '../../TextCatalog/BODY';

interface MenuProps {
    text: string;
    onClick: Function;
    disabled: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
}

const Menu = (props: MenuProps) => {
    const {no_disabled, disabled} = styles;

    return (
        <div
            aria-label={props.ariaLabel}
            className={props.disabled ? disabled : no_disabled}
            tabIndex={props.tabIndex}
            onClick={() => props.onClick()}
            onKeyPress={props.onKeyPress || function () {}}
        >
            <Body
                level={2}
                align='Center'
                type={props.disabled ? 'text_primary_special_0_disabled' : 'text_primary_special_0'}
                text={props.text}
            />
        </div>
    );
};

export default Menu;
