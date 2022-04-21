import * as React from 'react';
import Primary from '../../../Primary/Primary';
import Caption from '../../../../TextCatalog/CAPTION/Caption';
import Title from '../../../../TextCatalog/TITLE/Title';
import Headline from '../../../../TextCatalog/HEADLINE/Headline';
import Sub from '../../../../TextCatalog/SUB/Sub';
import styles from './InfoButton.styles';

export type InfoButtonProps = {
    textCaption: string;
    textTitle: string;
    textSub: string;
    buttonLabel: string;
    onClick: Function;
    decorateCaption?: boolean;
    tabIndex?: number;
}

const InfoButton = (props: InfoButtonProps) => {
    return (
        <>
            <div className={styles.footerMobile}></div>
            <div className={styles.container}>
                <div className={styles.left_column}>
                    <div className={styles.top_row}>
                        <Caption level={1} align='Left' type={props.decorateCaption ? 'text_secondary_strikethrough' : 'text_secondary'} text={props.textCaption} />
                    </div>
                    <div className={styles.bottom_row}>
                        <div className={styles.bottom_row_left_column}>
                            <div className={styles.mobilePrice}>
                                <Title level={2} align='Left' type='text_primary' text={props.textTitle} />
                            </div>
                            <div className={styles.desktopPrice}>
                                <Headline level={1} align={'Left'} type={'text_primary_special_0'} text={props.textTitle} />
                            </div>
                        </div>
                        <div className={styles.bottom_row_right_column}>
                            <Sub level={1} align='Left' type='text_secondary' text={props.textSub} />
                        </div>
                    </div>
                </div>
                <div className={styles.right_column}>
                    <Primary text={props.buttonLabel} onClick={props.onClick} tabIndex={props.tabIndex} />
                </div>
            </div>
        </>
    );
}

export default InfoButton;