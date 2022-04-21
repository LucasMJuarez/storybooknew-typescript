import { style } from 'typestyle';
import { colors } from '../../styles';

const styles: {
    headline: {
        [key: number]: {
            [key: string]: {
                [key: string]: string;
            };
        };
    };
} = {
    headline: {
        1: {
            Left: {
                text_primary_special_0: style({
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '1.33',
                    letterSpacing: 'normal',
                    color: colors.grey_0,
                }),
            },
        },
        2: {
            Right: {
                text_primary_special_0: style({
                    fontFamily: 'Roboto',
                    fontSize: 24,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '32px',
                    letterSpacing: 'normal',
                    textAlign: 'right',
                    color: colors.grey_0,
                }),
            },
        },
        3: {
            Left: {
                text_primary_special_1: style({
                    fontFamily: 'Roboto',
                    fontSize: 24,
                    fontWeight: 300,
                    fontStyle: 'normal',
                    lineHeight: '32px',
                    letterSpacing: 0,
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 24,
                    fontWeight: 300,
                    fontStyle: 'normal',
                    lineHeight: '32px',
                    letterSpacing: 0,
                    color: colors.android_icons_icon_primary,
                }),
                text_primary_2: style({
                    width: '328px',
                    height: '64px',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontWeight: 300,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.33,
                    letterSpacing: 'normal',
                    color: colors.grey_0,
                }),
                text_primary_2_bold: style({
                    width: '328px',
                    height: '64px',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.33,
                    letterSpacing: 'normal',
                    color: colors.grey_0,
                }),
            },
            Center: {
                text_primary_special_0: style({
                    fontFamily: 'Roboto',
                    fontSize: 24,
                    fontWeight: 300,
                    lineHeight: '32px',
                    textAlign: 'center',
                    color: colors.grey_0,
                }),
            },
        },
        4: {
            Left: {
                text_primary_inverse: style({
                    fontFamily: 'Roboto',
                    fontSize: 24,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    lineHeight: '32px',
                    letterSpacing: 0,
                    color: colors.white,
                }),
            },
        },
    },
};

export default styles;
