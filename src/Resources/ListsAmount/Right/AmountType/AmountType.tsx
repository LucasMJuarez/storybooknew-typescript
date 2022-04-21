import * as React from 'react';
import Body from '../../../../TextCatalog/BODY';
import Caption from '../../../../TextCatalog/CAPTION/Caption';
import styles from './AmountType.styles';
import transformNumberToCurrency from '../../../../utils/currency';

const AmountType = (
    props: {
        amount: string | number,
        text?: string,
        id?: string,
        ariaHidden?: boolean,
        showNegativeSymbol?: boolean,
        isLinedThrough?: boolean;
        isPrimaryType?: boolean;
    }
) => {
    const is_negative = typeof props.amount === 'number' && props.amount < 0;
    const isTextWarning = () =>{
        if (is_negative) {
            if (!props.isPrimaryType) {
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
        
    }

    const text = (
        typeof props.amount === 'string' ?
            props.amount
            :
            transformNumberToCurrency((props.showNegativeSymbol ? props.amount : Math.abs(props.amount)) || 0)
    );

    return (
        <div className={`${styles.container} ${props.isLinedThrough ? styles.lineThrough : ''}`}>
            <Body
                text={text}
                level={2}
                align='Right'
                type={isTextWarning() ? 'text_warning':'text_primary_2' }
                id={props.id}
                ariaHidden={props.ariaHidden}
            />
            {props.text &&
                <div className={styles.captioncontainer}>
                    <Caption
                        text={props.text}
                        level={1}
                        align='Right'
                        type='text_secondary_2'
                    />
                </div>
            }
        </div>
    );
};

export default AmountType;