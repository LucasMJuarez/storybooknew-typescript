import * as React from 'react';
import styles from './OneButton.styles';
import BaseButton from '../../../BaseButton';
import Body from '../../../../TextCatalog/BODY';
import Spinner24 from '../../../../Resources/Spinners/24/Spinner24';

function OneButton(props: {
    text: string; 
    onClick: Function; 
    loading?: boolean; 
    inverse?: boolean; 
    tabIndex?: number;
    ariaLabel?: string;
    disabled?: boolean;
}) {
    let button_text_type = 'text_button_primary';
    let {container, button, button_inverse} = styles;
    if (props.inverse) {
        button = `${button} ${button_inverse}`;
        button_text_type = 'text_button_primary_inverse';
    }
    return (
        <div className={container}>
            <BaseButton 
                ariaLabel={props.ariaLabel} 
                loading={props.loading} 
                tabIndex={props.tabIndex} 
                className={button} 
                onClick={props.onClick} 
                disabled={props.disabled}
                disableOnLoading
            >
                {props.loading ? (
                    <div style={{paddingRight: 7.5}}>
                        <Spinner24 inverse />
                    </div>
                ) : null}
                <Body level={2} align='Center' type={button_text_type} text={props.text} />
            </BaseButton>
        </div>
    );
}

export default OneButton;
