import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AdminPage from './shared/AdminPage.jsx';
import VolunteerList from './components/VolunteerList.jsx';
import AddEvent from './components/AddEvent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/volunteer-list",
    element: <AdminPage />,
    children: [
      {
        path: "/volunteer-list",
        element: <VolunteerList />
      }
    ]
  },
  {
    path: "/add-event",
    element: <AdminPage />,
    children: [
      {
        path: "/add-event",
        element: <AddEvent />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
