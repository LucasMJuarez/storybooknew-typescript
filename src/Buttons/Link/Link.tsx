import React from 'react';
import BaseButton from '../BaseButton';
import Sub from '../../TextCatalog/SUB';
import styles from './Link.styles';

export type linkProps = {
    text: string; 
    onClick: Function; 
    disabled?: boolean; 
    tabIndex? : number; 
    isAnchor? : boolean;
    href? : string;
    target? : string;
    onKeyPress? : () => void;
    ariaLabel? : string;
};

function Link(props: linkProps) {
    return (
        <>
            {
                props.isAnchor ? 
                <a
                    href={props.href}
                    onClick={() => props.onClick()}
                    target={props.target}
                    onKeyPress={props.onKeyPress || function () {}}
                    aria-label={props.ariaLabel}
                    className={styles.anchor}
                >
                    {props.text}
                </a>
                :
                <BaseButton tabIndex={props.tabIndex} disabled={props.disabled} className={styles.button} onClick={props.onClick}>
                    <Sub
                        text={props.text}
                        align='Center'
                        level={2}
                        type={props.disabled ? 'text_link_disabled' : 'text_link'}
                    />
                </BaseButton>
            }
        </>
    );
}

export default Link;
