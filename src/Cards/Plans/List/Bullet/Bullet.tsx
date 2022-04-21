import * as React from 'react';
import AssetOrchester from '../../../../Assets/24/AssetOrchester';
import { assetEnum } from '../../../../Assets/24/AssetOrchester/AssetOrchester';
import Sub from '../../../../TextCatalog/SUB';
import styles from './Bullet.styles';

export type BulletProps = {
    text: string,
    asset: assetEnum,
    isActive: boolean
}

const Bullet = (props: BulletProps) => {

    let subStyle: string;
    (props.isActive) ? subStyle = 'text_primary' : subStyle = 'text_secondary_2'

    return (
        <div className={styles.container}>
            <div className={styles.subContainerData}>
                <AssetOrchester asset={props.asset} />
            </div>
            <div className={styles.subContainerSub}>
                <Sub level={2} align='Left' type={subStyle} text={props.text} />
            </div>
        </div>
    );
}
export default Bullet;
