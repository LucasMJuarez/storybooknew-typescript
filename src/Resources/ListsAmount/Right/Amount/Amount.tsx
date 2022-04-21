import * as React from 'react';
import Body from '../../../../TextCatalog/BODY';
import Headline from '../../../../TextCatalog/HEADLINE/Headline';
import transformNumberToCurrency from '../../../../utils/currency';

export type AmountProps = number | string;

function Amount(props: { amount: AmountProps; id?: string; ariaHidden?: boolean; showNegativeSymbol?: boolean; isAmountHeadline?: boolean; }) {
    const is_negative = typeof props.amount === 'number' && props.amount < 0;

    const text = (
        typeof props.amount === 'string' ?
            props.amount
            :
            transformNumberToCurrency((props.showNegativeSymbol ? props.amount : Math.abs(props.amount)) || 0)
    );

    return (
        props.isAmountHeadline ?
            <Headline
                text={text}
                level={2}
                align='Right'
                type={'text_primary_special_0'}
            />
            :
            <Body
                level={2}
                id={props.id}
                ariaHidden={props.ariaHidden}
                align='Right'
                type={is_negative ? 'text_warning' : 'text_primary'}
                text={text}
            />
    );
}

export default Amount;
