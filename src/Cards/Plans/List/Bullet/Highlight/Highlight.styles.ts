import { style } from 'typestyle';
import { colors } from '../../../../../styles';

const styles = {
    containerWithBackground: style({
        background: colors.grey_5,
        display: 'flex',
        width: 'auto',
        $nest: {
            '@media only screen and (min-width: 768px)': {
                background: colors.white,
                display: 'flex',
                width: 'auto',
            },
        },
    }),
    containerWithoutBackground: style({
        display: 'flex',
        width: 'auto',
    }),
    subContainerData: style({
        alignItems: 'center',
        display: 'flex',
        padding: '8px 0px 8px 16px',
        height: '24px',
        width: '24px',
    }),
    subContainerSub: style({
        alignItems: 'center',
        display: 'flex',
        padding: '10px 14px 10px 8px'
    })
};

export default styles;
