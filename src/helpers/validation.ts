export function isEmail(value: string) {
  return /[a-zA-Z\.\d]+@.*\..*/.test(value) ? '' : '';
}

export function isEmpty(value: string) {
  return value === '' ? 'Please fill out this field' : '';
}

export function isRequired(value: string) {
  return value ? '' : 'Field is required';
}

export function length(len: number) {
  return (value: string) => value.length > len ? '' : `Length must be grate ${len}`
}