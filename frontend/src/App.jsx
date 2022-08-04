import React from 'react';
import { useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './router';

function App() {
  const routesList = useRoutes(routes);

  return (
    <div className="App">
      <Navbar />
      {routesList}
      English study App
    </div>
  );
}

export default App;
