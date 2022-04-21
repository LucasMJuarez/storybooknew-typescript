import * as React from 'react';
import styles from './Small.styles';
import BaseButton from '../../BaseButton';
import Body from '../../../TextCatalog/BODY';
import Spinner24 from '../../../Resources/Spinners/24/Spinner24';

export type secondarySmallButtonPropsType = {
    text: string;
    onClick: Function;
    loading?: boolean;
    inverse?: boolean;
    disabled?: boolean;
    tabIndex?: number;
    ariaLabel?: string;
};

function Primary(props: secondarySmallButtonPropsType) {
    let button_text_type = 'text_button_primary_small';
    let {button, button_inverse} = styles;
    if (props.inverse) {
        button = `${button} ${button_inverse} `;
        button_text_type = 'text_button_primary_small_inverse';
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
                    <Spinner24 inverse />
                </div>
            ) : null}
            <Body level={2} align='Center' type={button_text_type} text={props.text} />
        </BaseButton>
    );
}

export default Primary;
