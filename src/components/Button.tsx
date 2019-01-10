import * as React from 'react'
import '../styles/Button.css'

interface ButtonProps {
  name: string
  onSubmit(event: React.FormEvent): void
}

const Button = (props: ButtonProps) => (
  <button className="btn-primary" onClick={props.onSubmit}>
    {props.name}
  </button>
)

export default Button
