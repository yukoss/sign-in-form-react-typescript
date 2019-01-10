import * as React from 'react'

import Button from './Button'
import Input from './Input'
// import { isEmpty, isEmail } from '../helpers/validation'

import '../styles/Form.css'

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
    // const { errors } = this.state;

    Object.keys(this.state).map((prop) => {
      // 
    })

    return true
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // event.preventDefault()

    if (this.handleValidation()) {
      // Send data
    } else {
      return
    }
  }

  public render() {
    const { email, password } = this.state

    return (
      <form action="/" method="post" className="form" autoComplete="off">
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          handleChange={this.handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          handleChange={this.handleChange}
        />
        <Button name="Sign In" onSubmit={this.handleSubmit} />
      </form>
    )
  }
}

export default Form
