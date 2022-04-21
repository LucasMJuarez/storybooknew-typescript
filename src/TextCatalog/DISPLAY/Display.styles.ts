import { style } from 'typestyle';
import { colors } from '../../styles';

const styles: {
    display: {
        [key: number]: {
            [key: string]: {
                [key: string]: string;
            };
        };
    };
} = {
    display: {
        1: {
            Left: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 28,
                    fontWeight: 'normal',
                    lineHeight: '1.14',
                    textAlign: 'left',
                    color: colors.grey_0,
                }),
            },
        },
        3: {
            Center: {
                text_primary_special_0: style({
                    fontFamily: 'Roboto',
                    fontSize: 28,
                    fontWeight: 300,
                    lineHeight: '32px',
                    textAlign: 'center',
                    color: colors.grey_0,
                }),
            },
        },
        4: {
            Center: {
                text_primary_inverse: style({
                    fontFamily: 'Roboto',
                    fontSize: 40,
                    lineHeight: '48px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_icons_icon_navigation_bar,
                }),
            },
            Left: {
                text_primary_inverse: style({
                    fontFamily: 'Roboto',
                    fontSize: 40,
                    lineHeight: '48px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_icons_icon_navigation_bar,
                }),
            },
        },
    },
};

export default styles;
