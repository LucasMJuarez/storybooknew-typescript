import {style} from 'typestyle';
import {colors} from '../../styles';

const styles: {
    caption: {
        [key: number]: {
            [key: string]: {
                [key: string]: string;
            };
        };
    };
} = {
    caption: {
        1: {
            Left: {
                text_input_label_error: style({
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '16px',
                    letterSpacing: 0,
                    color: colors.android_buttons_danger_button_danger,
                }),
                text_input_label: style({
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    lineHeight: '16px',
                    letterSpacing: 0,
                    color: colors.android_bars_primary_primary,
                }),
                text_secondary_strikethrough: style({
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    lineHeight: '16px',
                    letterSpacing: 0,
                    color: '#757575',
                    textDecoration: 'line-through',
                }),
                text_secondary: style({
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    lineHeight: '16px',
                    letterSpacing: 0,
                    color: '#757575',
                }),
                text_secondary_special_0: style({
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    lineHeight: '16px',
                    letterSpacing: 0,
                    color: colors.android_charts_progress_chart_prog_2,
                }),
            },
            Center: {
                text_secondary_special_0: style({
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    lineHeight: '16px',
                    textAlign: 'center',
                    color: colors.grey_1,
                }),
            },
            Right: {
                text_secondary_2: style({
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.33,
                    letterSpacing: 'normal',
                    textAlign: 'right',
                    color: colors.grey_1
                }),
            },
        },
        2: {
            Center: {
                text_primary_inverse_2: style({
                    fontFamily: 'Roboto',
                    fontSize: 12,
                    fontWeight: 500,
                    lineHeight: '16px',
                    textAlign: 'center',
                    color: colors.white,
                }),
                text_primary_inverse_2_minSize: style({
                    fontFamily: 'Roboto',
                    fontSize: 9,
                    fontWeight: 500,
                    lineHeight: '16px',
                    textAlign: 'center',
                    color: colors.white,
                }),
            },
            Right: {
                text_primary: style({
                    fontFamily: 'Roboto',
                    textAlign: 'right',
                    fontSize: 12,
                    fontWeight: 'bold',
                    lineHeight: '16px',
                    letterSpacing: 0,
                    color: '#2a2a3c',
                }),
            },
        },
        3: {
            Center: {
                text_primary_inverse_2: style({
                    fontFamily: 'Roboto',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 1.33,
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    color: colors.white
                }),
            },
        },
    },
    
};

export default styles;
