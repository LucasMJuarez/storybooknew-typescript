import React from 'react';
import Spinner from '../Spinner';

function Spinner24(props: {inverse?: boolean; blue?: boolean}) {
    return <Spinner size={24} inverse={props.inverse ? true : false} blue={props.blue} />;
}

export default Spinner24;
