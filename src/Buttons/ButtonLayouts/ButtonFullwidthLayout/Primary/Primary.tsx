import * as React from 'react';
import styles from './Primary.styles';
import BaseButton from '../../../BaseButton';
import Body from '../../../../TextCatalog/BODY';
import Spinner24 from '../../../../Resources/Spinners/24/Spinner24';

const Primary = (props: {
    text: string;
    onClick: () => void;
    loading?: boolean;
    inverse?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    buttonFlexEnd?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
    isAnchor?: boolean;
    href?: string;
    target?: string;
}) => {
    let button_text_type = 'text_button_primary';
    let {container, button, button_inverse, button_full_width, button_flex_end, anchor} = styles;
    if (props.inverse) {
        button = `${button} ${button_inverse}`;
        button_text_type = 'text_button_primary_inverse';
    }
    return (
        <div className={props.buttonFlexEnd ? button_flex_end : container}>
            {
                props.isAnchor ?
                <a
                    href={props.href}
                    onClick={props.onClick}
                    className={props.fullWidth ? button_full_width : anchor}
                    target={props.target}
                    onKeyPress={props.onKeyPress || function () {}}
                    aria-label={props.ariaLabel}
                >
                    {props.loading ? (
                        <div style={{paddingRight: 7.5}}>
                            <Spinner24 inverse />
                        </div>
                    ) : null}
                    <Body level={2} align='Center' type={button_text_type} text={props.text} />
                </a>
                :
                <BaseButton
                    loading={props.loading}
                    className={props.fullWidth ? button_full_width : button}
                    onClick={props.onClick}
                    disabled={props.disabled}
                    tabIndex={props.tabIndex}
                    ariaLabel={props.ariaLabel}
                    onKeyPress={props.onKeyPress || function () {}}
                >
                    {props.loading ? (
                        <div style={{paddingRight: 7.5}}>
                            <Spinner24 inverse />
                        </div>
                    ) : null}
                    <Body level={2} align='Center' type={button_text_type} text={props.text} />
                </BaseButton>
            }
        </div>
    );
};

export default Primary;
