import * as React from 'react'
import '../styles/Input.css'

interface InputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  const { label, name, type, value, handleChange, placeholder } = props

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
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  value: '',
}

export default Input
