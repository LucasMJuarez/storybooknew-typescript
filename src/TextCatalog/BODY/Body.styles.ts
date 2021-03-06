import {style} from 'typestyle';
import Normal from '../../Snackbars/Action/Normal';
import {colors} from '../../styles';

const styles: {
    body: {
        [key: number]: {
            [key: string]: {
                [key: string]: string;
            };
        };
    };
} = {
    body: {
        1: {
            Left: {
                text_primary_inverse: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_primary_inverse_2: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    color: colors.android_icons_icon_primary,
                }),
                text_primary_2: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    color: colors.android_icons_icon_primary,
                }),
                text_disabled: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    color: colors.android_buttons_tertiary_button_tert,
                }),
                text_secondary: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    lineHeight: '24px',
                    letterSpacing: 0,
                    color: '#757575',
                }),
            },
        },
        2: {
            Center: {
                text_button_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_button_primary_inverse: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_bars_primary_primary,
                }),
                text_button_primary_disabled: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.movistar_blue_light_30,
                }),
                text_button_secondary: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_charts_progress_chart_prog_2,
                }),
                text_button_secondary_pressed: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_buttons_primary_button_prima,
                }),
                text_button_secondary_disabled: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_bubbles_bubble_other_backgro,
                }),
                text_button_secondary_inverse: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_button_secondary_inverse_pressed: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_button_secondary_inverse_disabled: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_charts_stacked_bar_chart_sta,
                }),
                text_button_tertiary: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_icons_icon_primary,
                }),
                text_primary_special_0: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.android_icons_icon_primary,
                }),
                text_primary_special_0_disabled: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'center',
                    color: colors.grey_1,
                }),
                text_button_primary_small: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    fontStretch: 'normal',
                    marginTop: '4px',
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_button_primary_small_inverse: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    fontStretch: 'normal',
                    marginTop: '4px',
                    color: colors.android_bars_primary_primary,
                }),
                text_button_secondary_small: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    fontStretch: 'normal',
                    marginTop: '4px',
                    color: colors.android_charts_progress_chart_prog_2,
                }),
                text_button_secondary_small_disabled: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    fontStretch: 'normal',
                    marginTop: '4px',
                    color: colors.android_bubbles_bubble_other_backgro,
                }),
                text_button_secondary_small_inverse: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    fontStretch: 'normal',
                    marginTop: '4px',
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_button_secondary_small_inverse_disabled: style({
                    fontFamily: 'Roboto',
                    fontSize: 14,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    fontStretch: 'normal',
                    marginTop: '4px',
                    color: colors.android_charts_stacked_bar_chart_sta,
                }),
            },
            Right: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'right',
                    color: colors.android_icons_icon_primary,
                }),
                text_primary_2: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    textAlign: 'right',
                    color: colors.grey_0,
                }),
                text_primary_inverse_2: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: colors.android_icons_icon_navigation_bar,
                }),
                text_warning: style({
                    fontFamily: 'Roboto',
                    fontSize: 16,
                    fontWeight: 500,
                    fontStyle: 'normal',
                    lineHeight: '24px',
                    letterSpacing: 0,
                    textAlign: 'right',
                    color: colors.android_charts_bar_chart_bar_chart_3,
                }),
                text_link_snackbar_2: style({
                    width: '57px',
                    height: '24px',
                    margin: '1px 0 0 27px',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '1.5',
                    letterSpacing: 'normal',
                    textAlign: 'right',
                    color: colors.movistar_blue_light_60,
                }),

            },
            Left: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: 500,
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.5,
                    letterSpacing: 'normal',
                    color: colors.android_icons_icon_primary,
                }),
            },
        },
    },
};

export default styles;
