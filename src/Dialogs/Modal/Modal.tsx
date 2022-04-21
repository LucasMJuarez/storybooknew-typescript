import React from 'react';
import styles from './Modal.styles';
import Close from '../../Assets/24/Close';
import FocusTrap from 'focus-trap-react';
import Primary from '../../Buttons/Primary';
import Secondary from '../../Buttons/Secondary';
import ModalTitle from './ModalTitle';
import ModalParagraph from './ModalParagraph';

function Modal(props: {
    title?: string;
    description?: string;
    labelPrimary: string;
    labelSecondary?: string;
    onClickPrimary: Function;
    onClickSecondary?: Function;
    onClickClose: Function;
    loadingPrimary?: boolean;
    loadingSecondary?: boolean;
    disabledPrimary?: boolean;
    disabledSecondary?: boolean;
}) {
    return (
        <FocusTrap>
            <div className={styles.overlayWrapper}>
                <div className={styles.wrapper}>
                    <button className={styles.close} onClick={e => props.onClickClose(e)}>
                        <Close />
                    </button>
                    {props.title && <ModalTitle text={props.title} />}
                    {props.description && <ModalParagraph text={props.description} />}
                    <div className={styles.buttonContainer}>
                        {
                            props.labelSecondary && props.onClickSecondary &&
                            <div className={styles.secondary}>
                                <Secondary
                                    text={props.labelSecondary}
                                    onClick={props.onClickSecondary}
                                    loading={props.loadingSecondary}
                                    disabled={props.disabledSecondary}
                                />
                            </div>
                        }
                        <Primary text={props.labelPrimary} onClick={props.onClickPrimary} loading={props.loadingPrimary} disabled={props.disabledPrimary} />
                    </div>
                </div>
            </div>
        </FocusTrap>
    );
}

export default Modal;
