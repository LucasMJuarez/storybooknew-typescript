import * as React from 'react';
import styles from './Secondary.styles';
import BaseButton from '../../../BaseButton';
import Body from '../../../../TextCatalog/BODY';
import Spinner24 from '../../../../Resources/Spinners/24/Spinner24';

const Secondary = (props: {
    text: string;
    onClick: Function;
    loading?: boolean;
    inverse?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    buttonFlexEnd?: boolean;
}) => {
    let textType = props.disabled ? 'text_button_secondary_disabled' : 'text_button_secondary';
    let {container, button, button_inverse, inverse_loading, button_full_width, button_flex_end} = styles;
    if (props.inverse) {
        button += ` ${button_inverse} ${props.loading ? inverse_loading : ''} `;
        textType = props.disabled ? 'text_button_secondary_inverse_disabled' : 'text_button_secondary_inverse';
    }
    return (
        <div className={props.buttonFlexEnd ? button_flex_end : container}>
            <BaseButton
                loading={props.loading}
                className={props.fullWidth ? button_full_width : button}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.loading ? (
                    <div style={{paddingRight: 7.5}}>
                        <Spinner24 inverse={props.inverse} />
                    </div>
                ) : null}
                <Body level={2} align='Center' type={textType} text={props.text} />
            </BaseButton>
        </div>
    );
};

export default Secondary;