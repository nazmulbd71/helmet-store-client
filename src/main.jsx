import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddHelmet from './components/AddHelmet.jsx';
import UpdateHelmet from './components/UpdateHelmet.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/helmet'),
  },
  {
    path: "/addhelmet",
    element: <AddHelmet />,
  },
  {
    path: "/updatehelmet/:id",
    element: <UpdateHelmet />,
    loader: ({ params }) => fetch(`http://localhost:5000/helmet/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
