import * as React from 'react';
import IdealChip from '../../Assets/16/IdealChip';
import RecomendationChip from '../../Assets/16/RecomendationChip';
import Sub from '../../TextCatalog/SUB';
import styles from './Chips.styles';

interface ChipsProps {
    title: string;
    onClick: Function;
    showIcon: boolean;
    isSelected: boolean;
    tabIndex?: number;
    role?: string;
}


function ChipDefault(props: ChipsProps) {

    return (
        <div
            onClick={() => props.onClick()} className={props.isSelected ? styles.componentIsSelected : styles.componentNotSelected}
            tabIndex={props.tabIndex || 0}
            role={props.role || ''}
        >
            {(props.showIcon && props.isSelected) &&
                <div className={styles.svg}>
                    <IdealChip />
                </div>
            }
            {(props.showIcon && !props.isSelected) &&
                <div className={styles.svg}>
                    <RecomendationChip />
                </div>
            }
            <div data-testid="wrapper-sub" className={props.showIcon ? styles.textWithIcon : styles.textWithoutIcon}>
                <Sub level={1} align='Left' type='text_primary' text={props.title} />
            </div>
        </div>
    );
}

export default ChipDefault;
