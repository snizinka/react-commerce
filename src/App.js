import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom';
import Cart from './pages/Cart';
import { productsData } from './api/Api';
import Product from './components/Product';
import Login from './pages/Login';

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <ScrollRestoration></ScrollRestoration>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: productsData
      },
      {
        path: '/product/:id',
        element: <Product></Product>
      },
      {
        path: '/cart',
        element: <Cart></Cart>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])


function App() {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
