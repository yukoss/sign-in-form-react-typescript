import * as React from 'react'
import '../styles/Button.css'

interface ButtonProps {
  name: string;
  onClick: (e: React.FormEvent) => void;
}

const Button = (props: ButtonProps) => (
  <button className="btn-primary" onClick={props.onClick}>{props.name}</button>
)

export default Button
