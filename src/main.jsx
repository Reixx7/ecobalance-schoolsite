import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Join from './pages/Join.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/home",
    element: <Home/>,
      },
        {
        path: "/join",
    element: <Join/>,
      },
        {
        path: "/projects",
    element: <Projects/>,
      },
        {
        path: "/contact",
    element: <Contact />,
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
