import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/about/About.jsx'
import Request from './pages/request/Request.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <h1>
        {/* Here can be your header */}
      </h1>
      <App />
    </div>,
  },
  {
    path: "/about",
    element: <div>
      <h1>
        <About />
      </h1>
    </div>,
  },
  {
    path: "/request",
    element: <div>
      <h1>
        <Request />
      </h1>
    </div>,
  },
  {
    path: "/request/:id",
    element: <div>
      <h1>
        <Request />
      </h1>
    </div>,
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
