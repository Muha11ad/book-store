import { createRoot } from 'react-dom/client'
import App from 'app/App'

import './index.css'

const container = document.querySelector('#root') as HTMLElement
const root = createRoot(container)

root.render(
        <App />
)
