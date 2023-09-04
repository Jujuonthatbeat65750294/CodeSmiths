import React from 'react'
import ReactDOM from 'react-dom/client'
import Game from './game.jsx'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';
import ProgressBar from './progressBar.js';


ReactDOM.createRoot(document.getElementById('gameBorder')).render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('progressBar')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ProgressBar />
    </StyledEngineProvider>
  </React.StrictMode>
)
