import React from 'react';
import BaseButton from '../../../../BaseButton';
import Body from '../../../../../TextCatalog/BODY';
import styles from './OneButtonCenter.styles';

export type oneButtonCenterPropsType = {
    text: string;
    onClick: Function;
    disabled?: boolean;
};

const OneButtonCenter = (props: oneButtonCenterPropsType) => {
    let textType = props.disabled ? 'text_button_primary_disabled' : 'text_button_primary_inverse';
    return (
        <div>
            <BaseButton className={styles.button} onClick={props.onClick} disableOnLoading disabled={props.disabled}>
                <Body level={2} align='Center' type={textType} text={props.text} />
            </BaseButton>
        </div>
    );
};

export default OneButtonCenter;
