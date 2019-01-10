export function isEmail(value: string) {
  return /[a-zA-Z\.\d]+@.*\..*/.test(value);
}

export function isEmpty(value: string) {
  return value === '';
}