import * as React from 'react'

type Validator = (value: any) => string;

interface FormField {
  value: string
  error: string
  validation: Validator[]
}

export interface FormContextt {
  state: {[key: string]: FormField};
  handleChange(data: { name: string, value: any }): void;
}

export const FormContext = React.createContext<null|FormContextt>(null);

function required(value: any) {
  return value ? '' : 'Field is required';
}

function email(value: string) {
  return value.includes('@') ? '' : 'Field must be email'
}

function length(len: number) {
  return (value: string) => value.length > len ? '' : `Length must be grate ${len}`
}

class FormProvider extends React.Component<{}, {}> {

  public state: FormContextt = {
    state: {
      email: {
        value: '',
        error: '',
        validation: [required, email],
      },
      password: {
        value: '',
        error: '',
        validation: [required, length(8)],
      }
    },
    handleChange: ({ name, value }) => {
      this.setState({ state: {
        ...this.state.state,
        [name]: {
          validation: this.state.state[name].validation,
          value,
          error: this.state.state[name].validation.reduce((acc: string, validator: Validator) => {
            return acc + validator(value);
          }, '')
      }}})
    },
  }

  render() {
    return (
      <FormContext.Provider value={this.state}>
        {this.props.children}
      </FormContext.Provider>
    )
  }
}

export default FormProvider
