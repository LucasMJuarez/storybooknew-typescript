import React from 'react';
import styles from './NoTitle.styles';
import Paragraph14 from '../../Texts/Basics/Left/Paragraph14';
import TwoButtonSmall from '../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/2Buttons/Small/Small';
import FocusTrap from 'focus-trap-react';

interface NoTitleProps {
    description: string;
    labelPrimary: string;
    labelSecondary: string;
    onClickPrimary: Function;
    onClickSecondary: Function;
    loadingPrimary?: boolean;
    loadingSecondary?: boolean;
    hideButton?: boolean;
    showWindow?: boolean;
}

const NoTitle = (props: NoTitleProps) => {
    return props.showWindow ? null : (
        <FocusTrap>
            <div className={styles.overlayWrapper}>
                <div className={styles.wrapper}>
                    <Paragraph14 text={props.description} />
                    <div className={styles.buttonContainerMobile}>
                        <TwoButtonSmall
                            textPrimary={props.labelPrimary}
                            textSecondary={props.labelSecondary}
                            onClickPrimary={props.onClickPrimary}
                            onClickSecondary={props.onClickSecondary}
                            loadingPrimary={props.loadingPrimary}
                            loadingSecondary={props.loadingSecondary}
                            flexDire={true}
                            hideButton={props.hideButton}
                        />
                    </div>
                </div>
            </div>
        </FocusTrap>
    );
};

export default NoTitle;
