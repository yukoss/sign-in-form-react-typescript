import * as React from 'react'
import { FormContextt, FormContext } from './FormProvider'

export type WithFormProps<ChildProps> = ChildProps & { ctx: FormContextt };

export function WithFormContext<ChildProps> (Component: React.ComponentType<WithFormProps<ChildProps>>) {
  return class extends React.Component<ChildProps> {
    render() {
      return (
        <FormContext.Consumer>
          {(props: FormContextt) => (<Component ctx={props} {...this.props} />)}
        </FormContext.Consumer>
      )
    }
  }
}
