import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

render(<App />, document.getElementById('app'))

