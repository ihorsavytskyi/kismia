import parse from "html-react-parser"

export const getOverWrittenString = (text) => {
    const str = text;
    const ranges = [
        '\ud83c[\udf00-\udfff]',
        '\ud83d[\udc00-\ude4f]',
        '\ud83d[\ude80-\udeff]'
    ];

    let overWrittenString = "<i>"
    overWrittenString += str.replace(new RegExp(ranges.join('|'), 'g'), '</i>$&<i>')
    overWrittenString += "</i>"


    return parse(overWrittenString)
}