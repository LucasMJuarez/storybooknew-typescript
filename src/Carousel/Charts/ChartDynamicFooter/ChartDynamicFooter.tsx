import React, {useMemo} from 'react';
import Body from '../../../TextCatalog/BODY';
import Sub from '../../../TextCatalog/SUB';
import styles from './ChartDynamicFooter.styles';

type Data = {
    title: string;
    subtitle: string;
    onClick?: Function;
};

export type ChartDynamicFooterProps = {
    rightArrow?: boolean;
    data: Data[];
    currentIndex: number;
    tabIndex?: number;
    role?: string;
    ariaLabel?: string;
    onKeyPress?: React.KeyboardEventHandler;
};

function ChartDynamicFooter({
    rightArrow,
    data,
    currentIndex,
    tabIndex,
    role,
    ariaLabel,
    onKeyPress,
}: ChartDynamicFooterProps) {
    const localLength = data.length;

    //Render dynamic footer
    const renderFooter = useMemo(() => {
        let output = [];

        for (let index = 0; index < localLength; index++) {
            let title = '';
            let subtitle = '';

            if (index === currentIndex) {
                title = data[index].title;
                subtitle = data[index].subtitle;
                output.push(
                    <div
                        data-testid={`dynamic-footer-${index}`}
                        key={`dynamic-footer-${index}`}
                        onClick={() => data[index].onClick?.()}
                        className={styles.chartFooterContainer}
                        tabIndex={tabIndex}
                        role={role}
                        aria-label={ariaLabel}
                        onKeyPress={onKeyPress || function () {}}
                    >
                        <div data-testid='title-container' className={rightArrow ? styles.inline : ''}>
                            <Body
                                text={title}
                                data-testid='title'
                                level={2}
                                align='Center'
                                type='text_button_tertiary'
                            />
                            {rightArrow && (
                                <svg
                                    data-testid='right-arrow'
                                    role='presentation'
                                    width='16'
                                    height='16'
                                    viewBox='0 0 24 24'
                                    className={styles.marginArrow}
                                >
                                    <path
                                        fill='#999999'
                                        d='M8.5 11.55l5-5.05c.34-.33.87-.33 1.2 0 .33.34.33.88 0 1.2l-4.18 4.25 4.18 4.23c.33.33.33.87 0 1.2-.34.34-.87.34-1.2 0l-5-5.04c-.2-.2-.2-.57 0-.8z'
                                        transform='rotate(180 12 12)'
                                    ></path>
                                </svg>
                            )}
                        </div>
                        <Sub text={subtitle} data-testid='subtitle' level={1} align='Center' type='text_secondary' />
                    </div>
                );
            }
        }
        return output;
    }, [currentIndex, localLength]);

    return <div data-testid='chart-footer-container'>{renderFooter}</div>;
}

export default ChartDynamicFooter;
