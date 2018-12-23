import * as React from 'react'

import Button from './Button'
import Input from './Input'

import '../styles/Form.css'

class Form extends React.Component {
  constructor(props: any) {
    super(props)

    this.state = {
      error: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value }: { name: string; value: string } = e.target

    this.setState({
      [name]: value,
    })
  }

  public handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  public render() {
    return (
      <form action="/" method="post" className="form" autoComplete="off">
        <Input
          label="Email"
          name="email"
          type="email"
          handleChange={this.handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          handleChange={this.handleChange}
        />
        <Button name="Sign In" onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default Form
