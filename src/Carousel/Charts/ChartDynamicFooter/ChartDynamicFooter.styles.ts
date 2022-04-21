import {style} from 'typestyle';

const styles = {
    chartFooterContainer: style({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "16px",
        textAlign: "center",
        transition: ".3s",
        $nest: {
            '&:hover': {
                cursor: 'pointer',
            },
        }
    }),
    inline: style({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "16px"
    }),
    marginArrow: style({
        marginTop: "1px"
    }),
};

export default styles;
