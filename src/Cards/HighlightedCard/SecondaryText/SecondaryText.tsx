import React from 'react';
import styles from './SecondaryText.styles';
import Title from '../../../TextCatalog/TITLE';
import Sub from '../../../TextCatalog/SUB';
import Button from '../../../Buttons/Secondary/Small';

type Props = {
    simpleLabel: string;
    description: string;
    btnText: string;
    onClick: Function;
};

const SecondaryText = ({simpleLabel, description, btnText, onClick}: Props) => {
    let {container, descriptionWrapper, btnWrapper} = styles;

    return (
        <div className={container}>
            <Title level={1} align='Left' type='text_primary' text={simpleLabel} />
            <div className={descriptionWrapper}>
                <Sub level={1} align='Left' type='text_secondary' text={description} />
            </div>
            <div className={btnWrapper}>
                <Button text={btnText} onClick={onClick} />
            </div>
        </div>
    );
};

export default SecondaryText;
