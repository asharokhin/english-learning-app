import React from 'react';
import About from './pages/About';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Dictionary from './pages/Dictionary';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/resources',
    element: <Resources />,
  },
  {
    path: '/dictionary',
    element: <Dictionary />,
  },
];

export default routes;
