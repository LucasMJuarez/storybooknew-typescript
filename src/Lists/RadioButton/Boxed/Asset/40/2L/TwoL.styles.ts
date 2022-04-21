import { style } from 'typestyle';
import dividerStyles from '../../../../../../Dividers/SlimLineCentered/SlimLineCentered.styles';

const styles = {
    container: style({
        borderColor: "#DDDDDD",
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '4px',
        overflow: 'hidden',
        marginBottom: '16px',
        display: 'flex',
        alignItems : 'center',
        padding: '16px 16px',
        $nest: {
            ['& .' + dividerStyles.SlimLineCentered]: {
                position: 'absolute',
                bottom: '1px',
                right: 0,
                left: 0,
            },
        },
    }),
    secondary : style({
        color: '#757575',
        fontFamily: 'Roboto',
        fontSize: '12px',
        fontStretch: 'normal',
        fontStyle: 'normal',
        fontWeight: 'normal',
        letterSpacing: 'normal',
        lineHeight: 1.33,
        height: '20px'
    }),
    content: style({
        display: 'flex',
        alignItems: 'center',
    }),
    assetContainer: style({
        paddingRight: '16px',
        marginLeft: '0'
    }),
    textContainer: style({
        display: 'flex',
        flexDirection: 'column',

        $nest: {
            ['& div']: {
                marginBottom: '2.5px',
                marginTop: '1.5px',
                fontSize: '12px'
            },
            ['& span']: {
                fontWeight: 500
            }
        }
    }),
};

export default styles;
