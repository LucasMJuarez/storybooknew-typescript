import React from 'react';
import styles from './PrimaryText.styles';
import Title from '../../../TextCatalog/TITLE';
import Sub from '../../../TextCatalog/SUB';
import Button from '../../../Buttons/Primary/Small';

type Props = {
    simpleLabel: string;
    description: Array<string>;
    btnText: string;
    onClick: Function;
};

const PrimaryText = ({ simpleLabel, description, btnText, onClick }: Props) => {
    let { container, descriptionWrapper, buttonWrapper } = styles;
    return (
        <div className={container}>
            <Title level={1} align='Left' type='text_primary' text={simpleLabel} />
            <div className={descriptionWrapper}>
                {
                    description.map((item, index) =>
                        <Sub key={`${index}_${item}`} level={1} align='Left' type='text_secondary' text={item} />
                    )}
            </div>
            <div className={buttonWrapper}>
                <Button text={btnText} onClick={onClick} />
            </div>
        </div>
    );
};

export default PrimaryText;