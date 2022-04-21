import React from 'react';
import styles from './TwoL.styles';
import Body from '../../../../../TextCatalog/BODY';
import Text14R from '../../../../../Resources/ListsChevron/Text14R/Secondary'
import Text16R from '../../../../../Resources/ListsChevron/Text16R';
import CheckON from '../../../../../Resources/ListsSelection/Right/CheckON';



export default function TwoL(props: { 
    primaryText: string; 
    secondaryText : string; 
    onClick: Function; 
}) {
    return (
        <div 
            onClick={() => props.onClick()} 
        >
            <div className={styles.box}>
                <Text16R text={props.primaryText} />
                {
                    <Text14R text={props.secondaryText} /> 
                }
                <div className={styles.right}>
                    <CheckON />
                </div>
            </div>
            
        </div>)
        }