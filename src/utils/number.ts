/**
 *
 * @param value number to be parsed
 * @returns string with _"5.050,50"_ format
 * @returns string with _"5.050"_ format (when no decimals)
 */
export const transformNumberToStringWithThousands = (value: number) => {
    const formatNumber = (numberToFormat: number) =>
        numberToFormat
            .toFixed(numberToFormat - Math.floor(numberToFormat) !== 0 ? 2 : 0)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    if (value >= 0) {
        return `${formatNumber(value)}`;
    } else {
        return `-${formatNumber(value * -1)}`;
    }
};
