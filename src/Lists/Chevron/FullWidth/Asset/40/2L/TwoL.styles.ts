import { style } from 'typestyle';
import dividerCenteredStyle from '../../../../../../Dividers/SlimLineCentered/SlimLineCentered.styles';
import dividerFullStyle from '../../../../../../Dividers/SlimLineFullWidth/SlimLineFullWidth.styles';

const styles = {
    container: style({
        height: '80px',
        padding: '0px 8px 0px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',
        $nest: {
            ['& .' + dividerCenteredStyle.SlimLineCentered]: {
                position: 'absolute',
                bottom: '1px',
                right: 0,
                left: 0,
            },
            ['& .' + dividerFullStyle.SlimLineFullWidth]: {
                position: 'absolute',
                bottom: '-7px',
                right: 0,
                left: 0,
            },
        },
    }),
    content: style({
        display: 'flex',
        alignItems: 'center',
    }),
    assetContainer: style({
        paddingRight: '16px',
        marginLeft: '16px'
    }),
    textContainer: style({
        display: 'flex',
        flexDirection: 'column',

        $nest: {
            ['& div']: {
                marginBottom: '2.5px',
                marginTop: '1.5px'
            },
        }
    }),
};

export default styles;