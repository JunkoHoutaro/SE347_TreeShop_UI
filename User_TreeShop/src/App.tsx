import React from 'react';
import './App.css';
import {Routes} from './routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import '@mantine/core/styles.css';
const routers = createBrowserRouter(Routes);
function App() {
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
