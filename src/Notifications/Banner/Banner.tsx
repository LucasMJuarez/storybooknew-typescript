import * as React from 'react';
import AssetOrchester from '../../Assets/24/AssetOrchester';
import {assetEnum} from '../../Assets/24/AssetOrchester/AssetOrchester';
import Close from '../../Assets/24/Close';
import {linkProps} from '../../Buttons/Link/Link';
import BttnsBanner from '../../Resources/Banner/BttnsBanner';
import TitleBanner from '../../Resources/Banner/TitleBanner';
import Sub from '../../TextCatalog/SUB';
import styles from './Banner.styles';

function Banner(props: {
    asset?: assetEnum;
    title?: string;
    description: string;
    permanent?: boolean;
    ariaLabel?: string;
    buttons?: {primaryAction: linkProps; secondaryAction: linkProps};
    role?: string;
    ariaHiddenSvg?: boolean;
}) {
    const [isVisible, setIsVisible] = React.useState(true);

    return isVisible ? (
        <div className={styles.outContainer}>
            <div className={styles.container}>
                <div className={styles.contentContainer}>
                    <div className={styles.assetContainer} aria-hidden={props.ariaHiddenSvg} >
                        <AssetOrchester  asset={props.asset || 'AlertInfo'} />
                    </div>
                    <div className={styles.textContainer}>
                        {props.title ? <TitleBanner text={props.title} /> : null}
                        <Sub level={1} align='Left' type='text_secondary' text={props.description} />
                    </div>
                    {props.permanent ? null : (
                        <button
                            className={styles.closeButton}
                            aria-label={props.ariaLabel}
                            role={props.role}
                            onClick={() => setIsVisible(false)}
                        >
                            <Close />
                        </button>
                    )}
                </div>
                {props.buttons ? (
                    <BttnsBanner
                        primaryAction={{...props.buttons.primaryAction}}
                        secondaryAction={{...props.buttons.secondaryAction}}
                    />
                ) : null}
            </div>
        </div>
    ) : null;
}

export default Banner;
