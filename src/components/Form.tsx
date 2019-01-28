import * as React from 'react'

import Button from './Button'
import Input from './Input'
// import { isEmpty, isEmail } from '../helpers/validation'

import '../styles/Form.css'
import FormProvider from './FormProvider';

interface FormState {
  email: string
  password: string
  errors: string[]
}

export interface ChangeEvent {
  error: string
  name: string
  value: string
}

class Form extends React.Component<any, FormState> {
  constructor(props: any) {
    super(props)

    this.state = {
      email: '',
      errors: [],
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  public handleChange({ name, value }: ChangeEvent) {
    this.setState({
      [name]: value,
    } as any)
  }

  public handleValidation() {
    Object.keys(this.state).map((prop) => {
      // 
    })

    return true
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (this.handleValidation()) {
      // Send 
    } else {
      return
    }
  }

  public render() {
    return (
      <FormProvider >
        <form action="/" method="post" className="form" autoComplete="off">
          <Input
            label="Email"
            name="email"
            type="email"
          />
          <Input
            label="Password"
            name="password"
            type="password"
          />
          <Button name="Sign In" onSubmit={this.handleSubmit} />
        </form>
      </FormProvider>
    )
  }
}

export default Form
