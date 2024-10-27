import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Main from './Pages/Main';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,  // The Layout wraps all routes
    errorElement: {},  // Error page in case of route issues
    children: [
      {
        index: true,         // This makes Home the default child route
        element: <Shop />,
      },
      {
        path: "mens",       // Route for Store page
        element: <ShopCategory category="mens"/>,
      },
      {
        path: "womens",       // Route for About page
        element: <ShopCategory category="womens"/>,
      },
      {
        path: "kids",       // Route for About page
        element: <ShopCategory category="kids"/>,
      },
      {
        path: "product",       // Route for About page
        element: <Product/>,
        children: [{
          path: ":productId",         // This makes Home the default child route
          element: <Shop />,
        }
        ]
      },
      {
        path: "cart",       // Route for About page
        element: <Cart/>,
      },{
        path: "login",       // Route for About page
        element: <LoginSignup/>,
      },
    ],
  },
]);
function App() {
  return (
    // <div>
    // <BrowserRouter>
    // <Navbar/>
    // <Routes>
    // <Route path='/' element={<Shop/>}/>
    // <Route path='/mens' element={<ShopCategory category="mens"/>}/>
    // <Route path='/womens' element={<ShopCategory category="womens"/>}/>
    // <Route path='/kids' element={<ShopCategory category="kids"/>}/>
    // <Route path='product' element={<Product/>}>
    // <Route path=':productId' element={<Product/>}/>
    // </Route>
    // <Route path='/cart' element={<Cart/>}/>
    // <Route path='/login' element={<LoginSignup/>}/>
    // </Routes>
    // </BrowserRouter>
  
    // </div>
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;