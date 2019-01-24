import * as React from 'react'
import '../styles/Input.css'

import ErrorMessage from './ErrorMessage'
import { WithFormContext, WithFormProps } from './WithFormContext'

interface InputProps {
  label: string
  type?: string
  name: string
  placeholder?: string
}

interface InputState {
  value: string
  error: string
  lastFocus: boolean
}

class Input extends React.Component<WithFormProps<InputProps>, InputState> {
  static defaultProps = {
    type: 'text',
  }

  state = {
    value: '',
    error: '',
    lastFocus: false,
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name }: Partial<HTMLInputElement> = event.target;
    
    this.props.ctx.handleChange({ name, value });
  }

  onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    this.setState({ lastFocus: true })
  }

  public render() {
    const { label, name, type, placeholder, ctx } = this.props
    const { error, lastFocus } = this.state
    
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
          value={ctx.state[name]}
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

export default WithFormContext<InputProps>(Input)
