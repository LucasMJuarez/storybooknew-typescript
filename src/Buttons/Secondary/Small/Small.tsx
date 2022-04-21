import * as React from 'react';
import styles from './Small.styles';
import BaseButton from '../../BaseButton';
import Body from '../../../TextCatalog/BODY';

export type secondarySmallButtonPropsType = {
    text: string;
    onClick: Function;
    inverse?: boolean;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
};

function Secondary(props: secondarySmallButtonPropsType) {
    let {button, buttonInverse} = styles;
    let textType = props.disabled ? 'text_button_secondary_small_disabled' : 'text_button_secondary_small';

    if (props.inverse) {
        button += ' ' + buttonInverse + ' ';
        textType = props.disabled
            ? 'text_button_secondary_small_inverse_disabled'
            : 'text_button_secondary_small_inverse';
    }

    return (
        <BaseButton
            className={button}
            onClick={props.onClick}
            disableOnLoading
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            ariaLabel={props.ariaLabel}
        >
            <Body level={2} align='Center' type={textType} text={props.text} />
        </BaseButton>
    );
}

export default Secondary;
