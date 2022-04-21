import * as React from 'react';
import styles from './Secondary.styles';
import BaseButton from '../BaseButton';
import Body from '../../TextCatalog/BODY';
import Spinner24 from '../../Resources/Spinners/24/Spinner24';

export type secondaryButtonPropsType = {
    text: string;
    onClick: Function;
    loading?: boolean;
    inverse?: boolean;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
};

function Secondary(props: secondaryButtonPropsType) {
    let textType = props.disabled ? 'text_button_secondary_disabled' : 'text_button_secondary';
    let {button, button_inverse, inverse_loading} = styles;
    if (props.inverse) {
        button += ` ${button_inverse} ${props.loading ? inverse_loading : ''} `;
        textType = props.disabled ? 'text_button_secondary_inverse_disabled' : 'text_button_secondary_inverse';
    }

    return (
        <BaseButton
            loading={props.loading}
            className={button}
            onClick={props.onClick}
            disableOnLoading
            disabled={props.disabled}
            tabIndex={props.tabIndex}
            ariaLabel={props.ariaLabel}
        >
            {props.loading ? (
                <div style={{paddingRight: 7.5}}>
                    <Spinner24 inverse={props.inverse} />
                </div>
            ) : null}
            <Body level={2} align='Center' type={textType} text={props.text} />
        </BaseButton>
    );
}

export default Secondary;
