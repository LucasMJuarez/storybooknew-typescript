import * as React from 'react';
import AssetOrchester from '../../../Assets/24/AssetOrchester';
import {assetEnum} from '../../../Assets/24/AssetOrchester/AssetOrchester';
import Feedback from '../../../Buttons/Link/Feedback';
import { linkProps } from '../../../Buttons/Link/Link';
import BttnsBanner from '../../../Resources/Banner/BttnsBanner';
import Sub from '../../../TextCatalog/SUB';
import styles from './BannerBoxed.styles';
export type Props={
    asset?: assetEnum;
    title: string;
    ariaLabel?: string;
    descriptionTabIndex?: number;
    buttons?: {primaryAction: linkProps; secondaryAction: linkProps};
    role?: string;
    ariaHiddenSvg?: boolean;
}

function BannerBoxed(props: Props) {
    return (
        <div className={styles.outContainer} role={props.role}>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.assetContainer} aria-hidden={props.ariaHiddenSvg}>
                        <AssetOrchester asset={props.asset || 'AlertInfo'} />
                    </div>
                    <div className={styles.textContainer}>
                        {props.title && <Sub level={1} align='Left' type='text_secondary' text={props.title} />}
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                {props.buttons ? (
                    <BttnsBanner
                        primaryAction={{...props.buttons.primaryAction}}
                        secondaryAction={{...props.buttons.secondaryAction}}
                    />
                ) : null}
                </div>
            </div>
        </div>
    );
}

export default BannerBoxed;
