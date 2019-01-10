import * as React from 'react'
import '../styles/Input.css'

import { ChangeEvent } from './Form'
import ErrorMessage from './ErrorMessage'

interface InputProps {
  label: string
  type?: string
  name: string
  value: string
  placeholder?: string
  handleChange: (event: ChangeEvent) => void
}

interface InputState {
  value: string
  error: string
  lastFocus: boolean
}

class Input extends React.Component<InputProps, InputState> {
  static defaultProps = {
    type: 'text',
  }

  state = {
    value: '',
    error: '',
    lastFocus: false,
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, validationMessage: error }: Partial<HTMLInputElement> = event.target;
    
    this.setState({ value, error })
  }

  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name } = this.props
    const { value, error } = this.state

    this.setState({ lastFocus: true })

    this.props.handleChange({
      name,
      value,
      error,
    })
  }

  public render() {
    const { label, name, type, placeholder } = this.props
    const { value, error, lastFocus } = this.state

    return (
      <div className="input-field">
        <label htmlFor={name} className="label">
          {label}
        </label>
        <input
          id={name}
          className="input"
          type={type}
          name={name}
          value={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder={placeholder}
          required={true}
        />
        {lastFocus && error && (<ErrorMessage name={name} />)}
      </div>
    )
  }
}

export default Input
