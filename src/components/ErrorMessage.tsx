import * as React from 'react'
import '../styles/ErrorMessage.css'

interface ErrorMessageProps {
  name: string
}

const ErrorMessage = (props: ErrorMessageProps) => (
  <p><span>{props.name}</span> is not valid.</p>
)

export default ErrorMessage
