import * as React from 'react';
import Back from '../../../Assets/24/NavBar/Back';
import NavBarTitle from '../../../Resources/NavBar/Left/NavBarTitle';
import Link from '../../../Buttons/Link/Link';
import styles from './Contextual.styles';
import CloseInverse from '../../../Assets/24/NavBar/CloseInverse';
import AlertButton from '../../../Assets/24/AlertInfoWhite';
import Shared from '../../../Assets/24/Shared_Cloud_Actived2';
import LayoutDownload from '../../../Assets/24/LayoutDownloadInvers';

function Contextual(props: {
    title?: string;
    onBackButtonPress: Function;
    rightButtonText?: string;
    disabledRightButton?: boolean;
    onClickRightButton?: Function;
    onClickSecondaryRightbutton?: Function;
    tabIndex?: number;
    role?: string;
    onkeyPress?: React.KeyboardEventHandler;
    ariaLabel?: string;
    isCloseButton?: boolean;
    isAlertButton?: boolean;
    isDownloaded?: boolean;
    isShared?: boolean;
    hideBackButton?: boolean;
}) {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                {props.hideBackButton ? null : (
                    <div
                        onClick={() => props.onBackButtonPress()}
                        className={styles.back}
                        tabIndex={props.tabIndex || 0}
                        role={props.role || ''}
                        aria-label={props.ariaLabel || ''}
                        onKeyPress={props.onkeyPress || function () {}}
                    >
                        {props.isCloseButton ? <CloseInverse /> : <Back />}
                    </div>
                )}
                {props.title && (
                    <div className={props.rightButtonText ? styles.titleWithRightButton : styles.titleContainer}>
                        <NavBarTitle text={props.title} />
                    </div>
                )}
            </div>
            {props.isShared ? (
                <div className={styles.rightButtonContainer}>
                    <Shared onClick={props.onClickSecondaryRightbutton || function () {}} />
                </div>
            ) : null}
            {props.rightButtonText ? (
                props.rightButtonText && (
                    <div className={props.disabledRightButton ? styles.disabledRightButton : styles.rightButton}>
                        <Link
                            tabIndex={0}
                            text={props.rightButtonText}
                            disabled={props.disabledRightButton}
                            onClick={props.onClickRightButton || function () {}}
                        />
                    </div>
                )
            ) : props.isAlertButton ? (
                <div className={styles.rightButtonContainer}>
                    <AlertButton background onClick={props.onClickRightButton || function () {}} />
                </div>
            ) : props.isDownloaded ? (
                <div className={styles.rightButtonContainer}>
                    <LayoutDownload onClick={props.onClickRightButton || function () {}} />
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

export default Contextual;
