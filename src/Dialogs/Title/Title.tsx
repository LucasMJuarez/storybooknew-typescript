import React from 'react';
import styles from './Title.styles';
import Title20 from '../../Texts/Basics/Left/Titles/Title20';
import Paragraph14 from '../../Texts/Basics/Left/Paragraph14';
import TwoButton from '../../Buttons/ButtonLayouts/ButtonFixedFooterLayout/2Buttons';
import Primary from '../../Buttons/Primary';

function Title(props: {
    title: string;
    description: string;
    labelPrimary: string;
    labelSecondary: string;
    onClickPrimary: Function;
    onClickSecondary: Function;
    loadingPrimary?: boolean;
    loadingSecondary?: boolean;
    hideSecondaryButton?: boolean;
}) {
    return (
        <div className={styles.overlayWrapper}>
            <div className={styles.wrapper}>
                <Title20 text={props.title} />
                <Paragraph14 text={props.description} />

                {props.hideSecondaryButton ? (
                    <div className={styles.buttonContainerOne}>
                        <Primary text={props.labelPrimary} onClick={props.onClickPrimary} />
                    </div>
                ) : (
                    <div className={styles.buttonContainer}>
                        <TwoButton
                            textPrimary={props.labelPrimary}
                            textSecondary={props.labelSecondary}
                            onClickPrimary={props.onClickPrimary}
                            onClickSecondary={props.onClickSecondary}
                            loadingPrimary={props.loadingPrimary}
                            loadingSecondary={props.loadingSecondary}
                            flexDire={true}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Title;
