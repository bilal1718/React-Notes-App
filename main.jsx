import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import 'react-mde/lib/styles/css/react-mde-all.css';
import './index.css';
let root=createRoot(document.getElementById("root"))
root.render(<App />)
