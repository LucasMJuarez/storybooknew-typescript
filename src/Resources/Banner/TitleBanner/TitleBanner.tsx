import React from 'react';
import Sub from '../../../TextCatalog/SUB';

function TitleBanner(props: {text: string}) {
    return <Sub level={2} align='Left' type='text_primary' text={props.text} />;
}

export default TitleBanner;
