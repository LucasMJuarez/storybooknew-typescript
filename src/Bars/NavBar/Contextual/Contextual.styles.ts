import {style} from 'typestyle';
import {colors} from '../../../styles';

const styles = {
    container: style({
        backgroundColor: colors.android_bars_primary_primary,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
        justifyContent: 'space-between',
        height: '56px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                backgroundColor: '#ffffff',
                borderBottom: '1px solid #eeeeee',
                height: '79px',
                $nest: {
                    '& svg g path:first-child': {
                        fill: colors.android_icons_icon_primary,
                    },
                },
            },
        },
    }),
    subContainer: style({
        display: 'flex',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                $nest: {
                    '& *': {
                        color: colors.android_icons_icon_primary,
                        lineHeight: '1',
                        display: 'flex',
                        alignItems: 'center',
                    },
                },
            },
        },
    }),
    rightButton: style({
        paddingRight: '25px',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                paddingRight: '10px',
                $nest: {
                    '& *': {
                        color: colors.android_icons_icon_navigation_bar,
                    },
                    '&:hover *': {
                        backgroundColor: 'transparent',
                    },
                },
            },
        },
    }),
    disabledRightButton: style({
        paddingRight: '25px',
        $nest: {
            '@media only screen and (max-width: 767px)': {
                paddingRight: '10px',
                $nest: {
                    '&:disabled *': {
                        color: colors.android_charts_stacked_bar_chart_sta,
                    },
                },
            },
        },
    }),
    back: style({
        margin: '16px 0px 16px 16px',
        height: '24px',
        cursor: 'pointer',
    }),
    titleContainer: style({
        marginLeft: '32px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                marginLeft: '8px',
            },
        },
    }),
    titleWithRightButton: style({
        marginLeft: '32px',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                marginLeft: '8px',
            },

            '@media only screen and (max-width: 390px)': {
                marginLeft: '10px',
                maxWidth: '165px',
            },
            '@media only screen and (max-width: 295px)': {
                marginLeft: '2px',
                maxWidth: '158px',
            },
        },
    }),
    rightButtonContainer: style({
        backgroundColor: colors.android_bars_primary_primary,
        border: 'none',
        display: 'block',
        margin: '0px 16px 0px 0px',
        $nest: {
            '&:hover': {
                cursor: 'pointer',
            },
            '@media only screen and (min-width: 768px)': {
                display: 'none',
            },
        },
    }),
};

export default styles;
