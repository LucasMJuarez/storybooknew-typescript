import * as React from 'react';
import RightChevron from '../../../../../Resources/ListsChevron/Right/Chevron';
import Text16R from '../../../../../Resources/ListsChevron/Text16R';
import Text14R from '../../../../../Resources/ListsChevron/Text14R/Secondary';
import styles from './TwoL.styles';

function TwoL(props: {
    text: string;
    secondaryText: string;
    onClick: Function;
    hideIcon?: boolean;
    ariaLabel?: string;
    role?: string;
    ariaHidden?: boolean;
    tabIndex?: number;
}) {
    return (
        <div
            onClick={() => props.onClick()}
            className={styles.container}
            aria-hidden={props.ariaHidden}
            aria-label={props.ariaLabel}
            role={props.role}
            tabIndex={props.tabIndex}
        >
            <div>
                <Text16R text={props.text} />
                <Text14R text={props.secondaryText} />
            </div>
            {props.hideIcon ? null : <RightChevron />}
        </div>
    );
}

export default TwoL;
