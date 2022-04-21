import {style} from 'typestyle';

const styles = {
    container: style({
        display: 'flex',
    }),
    counterLinkWrapper: style({
        $nest: {
            '&:hover': {
                cursor: 'pointer',
            },
        },
    }),
};
export default styles;
