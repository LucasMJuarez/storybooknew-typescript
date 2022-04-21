import React from 'react';
import Texts from '../../Resources/Charts/Circular/Text/Texts';
import {TEXTS_LEVELS} from '../../Resources/Charts/Circular/Text/Texts/Texts';
import Counter from './Counter';
import {STATUS_TYPE} from './Counter/Counter';

type Props = {
    primaryProgress?: number;
    size?: number;
    secondaryProgress?: number;
    status?: STATUS_TYPE;
    disableAnimation?: boolean;
    inverseAnimation?: boolean;
    hideProgress?: boolean;
    onClick?: Function;
    isLoading?: boolean;
    centerText: string;
    centerLevel?: TEXTS_LEVELS;
    headerText?: string;
    bottomText?: string;
    tabIndex?: number;
    role?: string;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
};

const CircularText = ({
    primaryProgress,
    size,
    secondaryProgress,
    status,
    disableAnimation,
    inverseAnimation,
    hideProgress,
    onClick,
    isLoading,
    centerText,
    centerLevel,
    headerText,
    bottomText,
    tabIndex,
    role,
    ariaLabel,
    onKeyPress,
}: Props) => {
    return (
        <Counter
            primaryProgress={primaryProgress}
            size={size}
            secondaryProgress={secondaryProgress}
            status={status}
            disableAnimation={disableAnimation}
            inverseAnimation={inverseAnimation}
            hideProgress={hideProgress}
            onClick={onClick}
            isLoading={isLoading}
            tabIndex={tabIndex}
            role={role}
            ariaLabel={ariaLabel}
            onKeyPress={onKeyPress}
        >
            <Texts centerText={centerText} centerLevel={centerLevel} headerText={headerText} bottomText={bottomText} />
        </Counter>
    );
};

export default CircularText;
