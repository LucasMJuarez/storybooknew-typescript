import * as React from 'react';
import styles from './ButtonLink.styles';
import BaseButton from '../../../BaseButton';
import Link from '../../../Link';
import PrimaryButton from '../../../Primary';

export interface ButtonLinkProps {
    textButton: string;
    textLink: string;
    onClickButton: Function;
    onClickLink: Function;
    loading?: boolean;
    disabledButton?: boolean;
    disabledLink?: boolean;
    disabled?: boolean;
    tabIndex?: number;
    tabIndexLink?: number;
    ariaLabel?: string;
    ariaLabelLink?: string;
    isAnchor?: boolean;
    href?: string;
    target?: string;
}

function ButtonLink(props: ButtonLinkProps) {
    return (
        <div className={styles.container}>
            <PrimaryButton
                disabled={props.disabledButton || props.disabled}
                loading={props.loading}
                text={props.textButton}
                onClick={props.onClickButton}
                tabIndex={props.tabIndex}
                ariaLabel={props.ariaLabel}
            />
            {props.isAnchor ? (
                <div className={styles.link}>
                    <Link
                        tabIndex={props.tabIndexLink}
                        disabled={props.disabledLink || props.disabled}
                        text={props.textLink}
                        onClick={props.onClickLink}
                        isAnchor={props.isAnchor}
                        href={props.href}
                        target={props.target}
                        ariaLabel={props.ariaLabelLink}
                    />
                </div>
            ) : (
                <div className={styles.link}>
                    <Link
                        tabIndex={props.tabIndexLink}
                        disabled={props.disabledLink || props.disabled}
                        text={props.textLink}
                        onClick={props.onClickLink}
                    />
                </div>
            )}
        </div>
    );
}

export default ButtonLink;
