export const formatOptionsFromObject = obj => Object.keys(obj).map(key => ({label: obj[key], value: key}))
export const formatOptionsFromArray = array => array.map(value => ({label: value, value}))
