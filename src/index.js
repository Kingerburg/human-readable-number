module.exports = function toReadable (number) {
    let xStr = number.toString();
    let result;
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hund = ['','one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i <= xStr.length; i++) {
        if (parseInt(xStr) === 0) {
            return 'zero';
            }
        if (xStr.length == 1) {
            result = units[xStr[i]];
            return result.trimEnd().replace('  ',' ');
        }
        if (xStr.length == 2 && xStr[i] == 1) {
            result = units[xStr];
            return result.trimEnd().replace('  ',' ');
        }
        if (xStr.length == 2 && xStr[i] >= 2) {
            result = tens[xStr[0]] + ' ' + units[xStr[1]]
            return result.trimEnd().replace('  ',' ');
        }
        if (xStr.length == 3 && xStr[1] == 0) {
            result = hund[xStr[0]] + ' ' + 'hundred' + ' ' + units[xStr[2]]
            return result.trimEnd().replace('  ',' ');
        }
        if (xStr.length == 3 && xStr[1] == 1) {
            result = hund[xStr[0]] + ' ' + 'hundred' + ' ' + units[xStr.slice(1,3)]
            return result.trimEnd().replace('  ',' ');
        }
        if (xStr.length === 3 && xStr[1] >= 2) {
            result = hund[xStr[0]] + ' ' + 'hundred' + ' ' + tens[xStr[1]] + ' ' + units[xStr[2]]
            return result.trimEnd().replace('  ',' ');
        }
    }    
}
