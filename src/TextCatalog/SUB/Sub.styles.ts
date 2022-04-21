import {style} from 'typestyle';
import {colors} from '../../styles';

const styles: {
    sub: {
        [key: number]: {
            [key: string]: {
                [key: string]: string;
            };
        };
    };
} = {
    sub: {
        1: {
            Left: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 'normal',
                    color: '#2a2a3c',
                }),
                text_secondary: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    color: '#757575',
                }),
                text_primary_inverse_2: style({
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#ffffff',
                }),
            },
            Center: {
                text_secondary: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: '#757575',
                }),
                text_chip_filter: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    lineHeight: '20px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'center',
                    color: colors.android_icons_icon_primary,
                }),
            },
            Right: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    lineHeight: '20px',
                    letterSpacing: 0,
                    textAlign: 'right',
                    color: colors.android_icons_icon_primary,
                }),
                text_primary_text: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    marginTop: 6,
                    letterSpacing: 0,
                    textAlign: 'right',
                    color: colors.android_icons_icon_primary,
                }),
            },
        },
        2: {
            Left: {
                text_secondary: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    color: '#757575',
                }),
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    color: colors.android_icons_icon_primary,
                }),
                text_secondary_2: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    color: '#757575',
                }),
                text_link: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    textAlign: 'left',
                    color: colors.android_bars_primary_primary,
                }),
                text_link_2: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    textAlign: 'left',
                    color: colors.android_bars_primary_primary,
                }),
                text_link_disabled: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    textAlign: 'left',
                    color: colors.android_charts_stacked_bar_chart_sta,
                }),
            },
            Center: {
                text_link: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_bars_primary_primary,
                }),
                text_link_disabled: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_charts_stacked_bar_chart_sta,
                }),
                text_link_red: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_buttons_danger_button_danger,
                }),
                text_link_disabled_red: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '20px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_buttons_danger_button_dang_2,
                }),
            },
        },
    },
};

export default styles;
