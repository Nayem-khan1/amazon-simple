
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Order from './components/Order/Order';
import OrderReview from './components/OrderReview/OrderReview';
import Main from './layout/Main';
import { ProductsAndCartLoader } from './loaders/ProductsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => {
            return fetch('products.json');
          },
          element: <Order></Order>
        },
        {
          path: 'order-review',
          loader: ProductsAndCartLoader,
          element: <OrderReview></OrderReview>
        },
        {
          path: 'manage-inventory',
          element: <ManageInventory></ManageInventory>
        },
        {
          path: 'login',
          element: <Login></Login>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
