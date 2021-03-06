import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './helpers/registerServiceWorker'
import './styles/index.css'

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)

registerServiceWorker()
