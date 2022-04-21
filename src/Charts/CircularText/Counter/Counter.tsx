import React from 'react';
import {colors} from '../../../styles';
import CircularChart from './CircularChart/CircularChart';
import styles from './Counter.styles';

const DEFAULT_COUNTER_SIZE = 128;
const MAX_COUNTER_STROKE = 4;

type Colors = {
    singlePrimary: string;
    multiplePrimary: string;
    multipleSecondary: string;
};

const createColors = (singlePrimary: string, multiplePrimary?: string, multipleSecondary?: string): Colors => ({
    singlePrimary,
    multiplePrimary: multiplePrimary || singlePrimary,
    multipleSecondary: multipleSecondary || singlePrimary,
});

const getStrokeFromSize = (size: number): number => Math.min(Math.ceil(size / 32), MAX_COUNTER_STROKE);

export const STATUS_TO_COLORS = {
    CRITICAL: createColors(colors.egg),
    OK: createColors(colors.movistar_green, colors.movistar_green_dark, colors.movistar_green_light_50),
    WARNING: createColors(colors.egg, colors.egg, colors.egg_light),
    UNLIMITED: createColors(colors.movistar_green_light_50),
    OVER_LIMIT: createColors(colors.pink),
    PLACEHOLDER: createColors(colors.grey_4),
};

export type STATUS_TYPE = keyof typeof STATUS_TO_COLORS;

type CounterLinkWrapperProps = {
    onClick?: Function;
    children: JSX.Element;
    tabIndex?: number;
    role?: string;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
};

const CounterLinkWrapper = ({
    onClick: handleClick,
    children,
    tabIndex,
    role,
    ariaLabel,
    onKeyPress,
}: CounterLinkWrapperProps) => {
    if (!handleClick) return children;

    return (
        <div
            onClick={() => handleClick()}
            className={styles.counterLinkWrapper}
            tabIndex={tabIndex}
            role={role}
            aria-label={ariaLabel}
            onKeyPress={onKeyPress || function () {}}
        >
            {children}
        </div>
    );
};

type Props = {
    children: React.ReactNode;
    primaryProgress?: number;
    size?: number;
    secondaryProgress?: number;
    status?: STATUS_TYPE;
    disableAnimation?: boolean;
    inverseAnimation?: boolean;
    hideProgress?: boolean;
    onClick?: Function;
    isLoading?: boolean;
    tabIndex?: number;
    role?: string;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
};

const Counter = ({
    children,
    primaryProgress = 0,
    size = DEFAULT_COUNTER_SIZE,
    secondaryProgress,
    status = 'OK',
    disableAnimation = false,
    inverseAnimation,
    hideProgress = false,
    onClick: handleClick,
    isLoading = false,
    tabIndex,
    role,
    ariaLabel,
    onKeyPress,
}: Props) => {
    const colors = STATUS_TO_COLORS[status];
    const color = secondaryProgress ? colors.multiplePrimary : colors.singlePrimary;
    const secondaryColor = secondaryProgress ? colors.multipleSecondary : undefined;
    const percentage1 = primaryProgress * 100;
    const percentage2 = secondaryProgress ? secondaryProgress * 100 : undefined;
    const colorBackground = hideProgress ? color : undefined;

    const chart = (
        <div className={styles.container}>
            <CircularChart
                size={size}
                stroke={getStrokeFromSize(size)}
                percentage={percentage1}
                colorBackground={colorBackground}
                color={color}
                secondaryPercentage={percentage2}
                secondaryColor={secondaryColor}
                disableAnimation={disableAnimation}
                inverseAnimation={inverseAnimation}
                hideProgress={hideProgress}
                isLoading={isLoading}
            >
                {children}
            </CircularChart>
        </div>
    );

    return (
        <CounterLinkWrapper
            onClick={handleClick}
            tabIndex={tabIndex}
            role={role}
            aria-label={ariaLabel}
            onKeyPress={onKeyPress}
        >
            {chart}
        </CounterLinkWrapper>
    );
};

export default Counter;
