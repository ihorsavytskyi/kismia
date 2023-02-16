export const getSplitString = (values, param, separator) => {
    return !!param ? values.map(value => value[param]).join(separator) : values.map(value => value.join(separator))
}