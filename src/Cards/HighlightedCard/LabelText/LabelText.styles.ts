import {style} from 'typestyle';
import {colors} from '../../../styles';

const styles: {[className: string]: string} = {
    container: style({
        border: `solid 1px ${colors.grey_3}`,
        display: 'grid',
        gridTemplateColumns: '1fr',
        padding: '24px 16px',
        gridRowGap: '8px',
        borderRadius: '4px',
    }),
    descriptionWrapper: style({
        display: 'grid',
        gridTemplateColumns: '1fr',
        paddingBottom: '0px',
    }),
    buttonWrapper: style({
        marginTop: '8px',
        width: 'fit-content',
    }),
};

export default styles;
