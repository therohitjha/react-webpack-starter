import React from 'react'
import './app.scss'
import {hot} from 'react-hot-loader'
function App() {
    return (
        <div className='app'>
            <h1>React Webpack Starter</h1>
        </div>
    )
}

export default hot(module)(App)
