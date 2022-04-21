import React from 'react';
import TestDrive from '../../../../Assets/24/TestDrive';
import PlaceHolder from './../../../../Assets/Placeholder/24';
import styles from './First.styles';
import Sub from '../../../../TextCatalog/SUB/Sub';
import {assetEnum} from './../../../../Assets/24/AssetOrchester/AssetOrchester';

export default function First(props: {text: string; asset: assetEnum}) {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.placeHolder}>
                    <PlaceHolder asset={props.asset} />
                </div>
                <div className={styles.description}>
                    <Sub level={2} align='Left' type='text_primary' text={props.text} />
                </div>
            </div>
        </div>
    );
}
