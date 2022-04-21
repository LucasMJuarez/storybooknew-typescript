import {style} from 'typestyle';
import {colors} from '../../../styles';

const styles: {[className: string]: string} = {
    container: style({
        border: `solid 1px ${colors.grey_3}`,
        display: 'grid',
        gridTemplateColumns: '1fr',
        padding: '24px 16px',
        gridRowGap: '10px',
        borderRadius: '4px',
    }),
    descriptionWrapper: style({
        display: 'grid',
        gridTemplateColumns: '1fr',
        paddingBottom: '2px',
    }),
    btnWrapper: style({
        maxWidth: '104px',
    }),
};

export default styles;
