import * as React from 'react';
import Body from '../../../TextCatalog/BODY';

function Text16R(props: {text: string; id?: string; ariaHidden?: boolean; type?:string}) {
    return (
        <Body
            ariaHidden={props.ariaHidden}
            level={1}
            align='Left'
            id={props.id}
            type={props.type ? props.type : 'text_primary'}
            text={props.text}
        />
    );
}

export default Text16R;
