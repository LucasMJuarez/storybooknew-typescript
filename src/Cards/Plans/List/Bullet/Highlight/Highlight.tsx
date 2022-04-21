import * as React from 'react';
import AssetOrchester from '../../../../../Assets/24/AssetOrchester';
import { assetEnum } from '../../../../../Assets/24/AssetOrchester/AssetOrchester';
import Sub from '../../../../../TextCatalog/SUB';
import styles from './Highlight.styles';

export type HighlightProps = {
    text: string,
    asset: assetEnum,
    isBackground?: boolean
}

const Highlight = (props: HighlightProps) => {
    return (
        <div className={props.isBackground ? styles.containerWithBackground : styles.containerWithoutBackground}>
            <div className={styles.subContainerData}>
                <AssetOrchester asset={props.asset} />
            </div>
            <div className={styles.subContainerSub}>
                <Sub level={2} align='Left' type='text_primary' text={props.text} />
            </div>
        </div>
    );
}
export default Highlight;
