import * as React from 'react';
import Body from '../../../../TextCatalog/BODY';

function Primary16R(props: {text: string; id?: string; ariaHidden?: boolean; type?: any}) {
    return (
        <Body
            id={props.id}
            ariaHidden={props.ariaHidden}
            level={1}
            align={'Left'}
            type={props.type || 'text_primary'}
            text={props.text}
        />
    );
}

export default Primary16R;
