import * as React from 'react';
import Right from '../../../../../Assets/24/Chevron/Right';
import RightInactive from '../../../../../Assets/24/Chevron/RightInactive';
import SlimLineCentered from '../../../../../Dividers/SlimLineCentered';
import Text16R from '../../../../../Resources/ListsChevron/Text16R';
import styles from './OneL.styles';
import GrayDown from '../../../../../Assets/24/Dropdown/GrayDown';

function OneL(props: {
    text: string;
    onClick: Function;
    hideLine?: boolean;
    tabIndex?: number;
    onkeyPress?: React.KeyboardEventHandler;
    id?: string;
    disable?: boolean;
    ariaLabel?: string;
    role?: string;
    idText?: string;
    ariaHiddenText?: boolean;
    ariaLabelled?: string;
    ariaDisabled?: boolean;
    grayDown?: boolean;
}) {
    let textType = props.disable ? 'text_disabled' : 'text_primary';
    let container = props.disable ? styles.container + ' ' + styles.disabled : styles.container;
    return (
        <div
            id={props.id}
            onClick={() => props.onClick()}
            className={container}
            tabIndex={props.tabIndex}
            onKeyPress={props.onkeyPress || function () {}}
            aria-label={props.ariaLabel}
            role={props.role}
            aria-labelledby={props.ariaLabelled}
            aria-disabled={props.ariaDisabled}
        >
            <Text16R text={props.text} type={textType} id={props.idText} ariaHidden={props.ariaHiddenText} />
            {props.grayDown ? <GrayDown /> : props.disable ? <RightInactive /> : <Right />}
            {props.hideLine ? null : <SlimLineCentered />}
        </div>
    );
}

export default OneL;
