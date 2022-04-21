import React from 'react';
import Title20 from '../../Texts/Basics/Left/Titles/Title20';
import Close from '../../Assets/24/Close';
import Small from '../../Buttons/Primary/Small';
import Primary from '../../Buttons/Primary';
import styles from './Items.styles';

export type ItemsProps = {
    title: string;
    children?: React.ReactNode;
    buttonLabel: string;
    tabIndex?: number;
    onClick: Function;
    onClickClose: Function;
};

const Items = (props: ItemsProps) => {
    return (
        <div className={styles.overlayWrapper}>
            <div className={styles.wrapper}>
                <button data-testid="wrapper-close" className={styles.close} onClick={() => props.onClickClose()}>
                    <Close />
                </button>
                <Title20 text={props.title} />
                <div data-testid="childrens" className={styles.childrenContainer}>
                    {props.children}
                </div>
                <div className={styles.buttonContainer}>
                    <Small text={props.buttonLabel} onClick={props.onClick} tabIndex={props.tabIndex} />
                </div>
                <div className={styles.buttonContainerDesktop}>
                    <Primary text={props.buttonLabel} onClick={props.onClick} tabIndex={props.tabIndex} />
                </div>
            </div>
        </div>
    );
};

export default Items;