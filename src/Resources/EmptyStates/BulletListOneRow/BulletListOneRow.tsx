import * as React from 'react';
import Checkbox from '../../../Controls/Checkbox';
import Sub from '../../../TextCatalog/SUB/Sub';
import styles from "./BulletListOneRow.styles";
import { colors } from '../../../styles';

export type BulletListOneRowProps = {
    text: string
    checkboxColor?: string;
}

const BulletListOneRow = (props: BulletListOneRowProps) => {
    const checkBoxColor = props.checkboxColor ? props.checkboxColor : colors.movistar_green;
    return (
        <div  className={styles.container}>
            <div className={styles.checkBox}>
                <Checkbox checkboxColor={props.checkboxColor}/>
            </div>
            <div className={styles.text}>
                <Sub text={props.text} level={1} align='Left' type='text_primary' />
            </div>
        </div>
    );
}

export default BulletListOneRow;