import {style} from 'typestyle';
import {colors} from '../../styles';

const styles: {
    title: {
        [key: number]: {
            [key: string]: {
                [key: string]: string;
            };
        };
    };
} = {
    title: {
        0: {
            Left: {
                text_navigation_bar_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 18,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 'normal',
                    fontWeight: 400,
                    color: colors.android_icons_icon_navigation_bar,
                    $nest: {
                        '@media (max-width: 600px)': {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '14.5rem',
                        },
                        '@media (min-width: 778px)': {
                            color: colors.android_icons_icon_primary,
                        },
                    },
                }),
            },
            Center: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 18,
                    fontWeight: 500,
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_icons_icon_primary,
                }),
            },
        },
        1: {
            Left: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 18,
                    fontWeight: 300,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    color: colors.android_icons_icon_primary,
                }),
                text_primary_special_1: style({
                    fontFamily: 'Roboto',
                    fontSize: 18,
                    fontWeight: 300,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_secondary: style({
                    fontFamily: 'Roboto',
                    fontSize: 18,
                    fontWeight: 300,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    color: '#757575',
                }),
                text_primary_bold: style({
                    fontFamily: 'Roboto',
                    fontSize: 18,
                    fontWeight: 'lighter',
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    color: colors.android_icons_icon_primary,
                }),
            },
            Center: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: '18px',
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.33,
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    color: colors.android_icons_icon_primary,
                }),
                text_primary_2: style({
                    fontFamily: 'Roboto',
                    fontSize: '18px',
                    fontWeight: 300,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.33,
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    color: colors.android_icons_icon_primary,
                }),
            },
        },
        2: {
            Left: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: '20px',
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.2,
                    letterSpacing: 'normal',
                    color: colors.android_icons_icon_primary,
                }),
                text_primary_inverse_2: style({
                    fontFamily: 'Roboto',
                    fontSize: '20px',
                    fontWeight: 400,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: colors.android_icons_icon_navigation_bar,
                }),
            },
            Center: {
                text_primary_inverse_2: style({
                    fontFamily: 'Roboto',
                    fontSize: '20px',
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.2,
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    color: colors.white,
                }),
            },
        },
        3: {
            Center: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 20,
                    fontWeight: 300,
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_icons_icon_primary,
                }),
                text_primary_special_0: style({
                    fontFamily: 'Roboto',
                    fontSize: 20,
                    fontWeight: 300,
                    lineHeight: '24px',
                    textAlign: 'center',
                    color: colors.grey_0,
                }),
            },
            Left: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 18,
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.33,
                    letterSpacing: 'normal',
                    color: colors.android_icons_icon_primary,
                }),
            },
        },
        4: {
            Left: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontWeight: 300,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.33,
                    letterSpacing: 'normal',
                    color: colors.android_icons_icon_primary,
                }),
            },
        },
        5: {
            Left: {
                text_primary_inverse: style({
                    fontFamily: 'Roboto',
                    fontSize: '18px',
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.33,
                    letterSpacing: 'normal',
                    color: colors.white,
                }),
            },
        },
    },
};

export default styles;
