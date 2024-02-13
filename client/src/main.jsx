// import all react (dom & router) and bootstrap-styling libraries, along with file resources to this main .jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import './index.css';

import App from './App.jsx';

import AboutPage from './pages/AboutPage.jsx';
import AllBikesPage from './pages/AllBikesPage.jsx';
import SingleBikePage from './pages/SingleBikePage.jsx';
import ContractPage from './pages/ContractPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/Profile.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

// setup the react router  and endpoints for index, and other pages
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'bikes',
        element: <AllBikesPage />,
      },
      {
        path: 'bike/:id',
        element: <SingleBikePage />,
      },
      {
        path: 'contract',
        element: <ContractPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
