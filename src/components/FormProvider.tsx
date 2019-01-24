import * as React from 'react'

export interface FormContextt {
  state: any;
  handleChange(data: { name: string, value: any }): void;
}

export const FormContext = React.createContext<null|FormContextt>(null);

class FormProvider extends React.Component<{}, {}> {

  public state: FormContextt = {
    state: {
      email: '',
      password: ''
    },
    handleChange: ({ name, value }) => {
      this.setState({ state: {...this.state.state, [name]: value}})
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
