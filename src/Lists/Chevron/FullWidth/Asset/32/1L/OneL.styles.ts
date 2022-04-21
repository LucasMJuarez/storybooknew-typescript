import {style} from 'typestyle';
import dividerStyles from '../../../../../../Dividers/SlimLineCentered/SlimLineCentered.styles';

const styles = {
    container: style({
        height: '64px',
        padding: '0px 8px 0px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',
        $nest: {
            ['& .' + dividerStyles.SlimLineCentered]: {
                position: 'absolute',
                bottom: '1px',
                right: 0,
                left: 0,
            },
        },
    }),
    content: style({
        display: 'flex',
        alignItems: 'center',
    }),
    assetConteiner: style({
        paddingRight: '16px',
        height: '32px',
    }),
    linkText: style({
        $nest: {
            '& > *:first-child': {
                color: '#00a9e0',
            },
        },
    })
};

export default styles;
